import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { debounce } from './index';

describe('debounce', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('应该在延迟后调用函数', () => {
    const fn = vi.fn();
    const debouncedFn = debounce(fn, { wait: 300 });

    debouncedFn();
    expect(fn).not.toHaveBeenCalled();

    vi.advanceTimersByTime(300);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('应该只调用最后一次', () => {
    const fn = vi.fn();
    const debouncedFn = debounce(fn, { wait: 300 });

    debouncedFn('a');
    debouncedFn('b');
    debouncedFn('c');

    vi.advanceTimersByTime(300);
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith('c');
  });

  it('leading: true 时应该立即调用', () => {
    const fn = vi.fn();
    const debouncedFn = debounce(fn, { wait: 300, leading: true });

    debouncedFn('first');
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith('first');

    debouncedFn('second');
    expect(fn).toHaveBeenCalledTimes(1);

    vi.advanceTimersByTime(300);
    expect(fn).toHaveBeenCalledTimes(2);
    expect(fn).toHaveBeenLastCalledWith('second');
  });

  it('trailing: false 时不应该在延迟后调用', () => {
    const fn = vi.fn();
    const debouncedFn = debounce(fn, { wait: 300, leading: true, trailing: false });

    debouncedFn('first');
    expect(fn).toHaveBeenCalledTimes(1);

    debouncedFn('second');
    vi.advanceTimersByTime(300);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('cancel() 应该取消待执行的调用', () => {
    const fn = vi.fn();
    const debouncedFn = debounce(fn, { wait: 300 });

    debouncedFn();
    debouncedFn.cancel();

    vi.advanceTimersByTime(300);
    expect(fn).not.toHaveBeenCalled();
  });

  it('flush() 应该立即执行待执行的调用', () => {
    const fn = vi.fn();
    const debouncedFn = debounce(fn, { wait: 300 });

    debouncedFn('test');
    expect(fn).not.toHaveBeenCalled();

    debouncedFn.flush();
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith('test');
  });

  it('pending() 应该返回是否有待执行的调用', () => {
    const fn = vi.fn();
    const debouncedFn = debounce(fn, { wait: 300 });

    expect(debouncedFn.pending()).toBe(false);

    debouncedFn();
    expect(debouncedFn.pending()).toBe(true);

    vi.advanceTimersByTime(300);
    expect(debouncedFn.pending()).toBe(false);
  });

  it('maxWait 应该在最大等待时间后强制执行', () => {
    const fn = vi.fn();
    const debouncedFn = debounce(fn, { wait: 300, maxWait: 500 });

    debouncedFn('a');
    vi.advanceTimersByTime(200);
    debouncedFn('b');
    vi.advanceTimersByTime(200);
    debouncedFn('c');

    // 此时已经过了 400ms，还没到 maxWait
    expect(fn).not.toHaveBeenCalled();

    vi.advanceTimersByTime(100);
    // 现在过了 500ms，达到 maxWait
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('默认 wait 应该是 300ms', () => {
    const fn = vi.fn();
    const debouncedFn = debounce(fn);

    debouncedFn();
    vi.advanceTimersByTime(299);
    expect(fn).not.toHaveBeenCalled();

    vi.advanceTimersByTime(1);
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
