function foo(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Operands must be numbers');
  }
  return a + b;
}
console.log(foo(2, 3)); // Output: 5
console.log(foo(2, "3")); // Throws Error
console.log(foo("2", 3)); // Throws Error
console.log(foo("2", "3")); // Throws Error