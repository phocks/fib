/**
 * @module
 *
 * This module return the nth number in the Fibonacci sequence.
 *
 * @example
 * ```ts
 * import { fib } from "./mod.ts";
 *
 * console.log(fib(3)); // 2
 * console.log(fib(5)); // 5
 * ```
 */
const fib = (n: number): number => {
  if (n <= 1) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
};

export { fib };
