export const add = (a, b) => {
  if (typeof a !== 'number')
    throw new Error('The first number must be a number');

  if (typeof b !== 'number')
    throw new Error('The second number must be a number');

  return a + b;
};

export const subtract = (a, b) => {
  if (typeof a !== 'number')
    throw new Error('The first number must be a number');

  if (typeof b !== 'number')
    throw new Error('The second number must be a number');

  return a - b;
};

export const multiply = (a, b) => {
  if (typeof a !== 'number')
    throw new Error('The first number must be a number');

  if (typeof b !== 'number')
    throw new Error('The second number must be a number');

  return a * b;
};

export const divide = (a, b) => {
  if (typeof a !== 'number')
    throw new Error('The first number must be a number');

  if (typeof b !== 'number')
    throw new Error('The second number must be a number');

  if (b === 0) return 0;

  return a / b;
};
