/**
 * @module
 *
 * This module return the nth number in the Fibonacci sequence.
 *
 */
const fib = (n: number): number => {
  if (n <= 1) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
};

export { fib };
