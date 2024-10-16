import { assertEquals } from "@std/assert";
import { fib } from "./mod.ts";

Deno.test(function addTest() {
  assertEquals(fib(3), 2);
});
