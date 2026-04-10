/**
 * 防抖函数配置选项
 */
export interface DebounceOptions {
  /** 延迟时间（毫秒），默认 300ms */
  wait?: number;
  /** 是否在延迟开始前调用，默认 false */
  leading?: boolean;
  /** 是否在延迟结束后调用，默认 true */
  trailing?: boolean;
  /** 最大等待时间（毫秒），超过此时间强制执行 */
  maxWait?: number;
}

/**
 * 防抖后的函数类型
 */
export interface DebouncedFunction<T extends (...args: any[]) => any> {
  (...args: Parameters<T>): void;
  /** 取消延迟的函数调用 */
  cancel: () => void;
  /** 立即执行函数 */
  flush: () => void;
  /** 检查是否有待执行的调用 */
  pending: () => boolean;
}

/**
 * 创建一个防抖函数，该函数会延迟调用 func，直到距离上次调用经过 wait 毫秒后才执行
 *
 * @param func - 需要防抖的函数
 * @param options - 配置选项
 * @returns 防抖后的函数
 *
 * @example
 * ```ts
 * // 基础用法
 * const debouncedFn = debounce(() => console.log('called'), { wait: 300 });
 *
 * // 带 leading 选项
 * const debouncedFn = debounce(fn, { wait: 300, leading: true });
 *
 * // 取消防抖
 * debouncedFn.cancel();
 * ```
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  options: DebounceOptions = {}
): DebouncedFunction<T> {
  const { wait = 300, leading = false, trailing = true, maxWait } = options;

  let timerId: ReturnType<typeof setTimeout> | null = null;
  let lastArgs: Parameters<T> | null = null;
  let lastCallTime: number | undefined;
  let lastInvokeTime = 0;
  let result: ReturnType<T>;

  const useMaxWait = maxWait !== undefined;
  const maxWaitTime = useMaxWait ? Math.max(maxWait, wait) : 0;

  function invokeFunc(time: number): ReturnType<T> {
    const args = lastArgs!;
    lastArgs = null;
    lastInvokeTime = time;
    result = func(...args);
    return result;
  }

  function shouldInvoke(time: number): boolean {
    const timeSinceLastCall = lastCallTime === undefined ? 0 : time - lastCallTime;
    const timeSinceLastInvoke = time - lastInvokeTime;

    return (
      lastCallTime === undefined ||
      timeSinceLastCall >= wait ||
      timeSinceLastCall < 0 ||
      (useMaxWait && timeSinceLastInvoke >= maxWaitTime)
    );
  }

  function remainingWait(time: number): number {
    const timeSinceLastCall = lastCallTime === undefined ? 0 : time - lastCallTime;
    const timeSinceLastInvoke = time - lastInvokeTime;
    const timeWaiting = wait - timeSinceLastCall;

    return useMaxWait
      ? Math.min(timeWaiting, maxWaitTime - timeSinceLastInvoke)
      : timeWaiting;
  }

  function timerExpired(): void {
    const time = Date.now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time: number): void {
    timerId = null;
    if (trailing && lastArgs) {
      invokeFunc(time);
    }
    lastArgs = null;
  }

  function leadingEdge(time: number): void {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    if (leading) {
      invokeFunc(time);
    }
  }

  function cancel(): void {
    if (timerId !== null) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = null;
    lastCallTime = undefined;
    timerId = null;
  }

  function flush(): void {
    if (timerId === null) {
      return;
    }
    trailingEdge(Date.now());
  }

  function pending(): boolean {
    return timerId !== null;
  }

  function debounced(...args: Parameters<T>): void {
    const time = Date.now();
    const isInvoking = shouldInvoke(time);

    lastArgs = args;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === null) {
        leadingEdge(time);
        return;
      }
      if (useMaxWait) {
        timerId = setTimeout(timerExpired, wait);
        invokeFunc(time);
        return;
      }
    }
    if (timerId === null) {
      timerId = setTimeout(timerExpired, wait);
    }
  }

  debounced.cancel = cancel;
  debounced.flush = flush;
  debounced.pending = pending;

  return debounced;
}
