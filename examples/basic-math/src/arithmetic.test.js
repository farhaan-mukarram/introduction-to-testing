import { describe, it, expect } from 'vitest';
import { add, subtract, divide, multiply } from './arithmetic';

describe('add', () => {
  it('should add two numbers', () => {
    expect(add(2, 2)).toBe(4);
  });

  it('should throw an error when the first argument is not a number', () => {
    expect(() => add(undefined, 2)).toThrow('must be a number');
  });

  it('should throw an error when the second argument is not a number', () => {
    expect(() => add(2, undefined)).toThrow('must be a number');
  });
});

describe('subtract', () => {
  it('should subtract two numbers', () => {
    expect(subtract(2, 2)).toBe(0);
  });

  it('should throw an error when the first argument is not a number', () => {
    expect(() => subtract(undefined, 2)).toThrow('must be a number');
  });

  it('should throw an error when the second argument is not a number', () => {
    expect(() => subtract(2, undefined)).toThrow('must be a number');
  });
});

describe('multiply', () => {
  it('should multiply two numbers', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  it('should throw an error when the first argument is not a number', () => {
    expect(() => multiply(undefined, 2)).toThrow('must be a number');
  });

  it('should throw an error when the second argument is not a number', () => {
    expect(() => multiply(2, undefined)).toThrow('must be a number');
  });
});

describe('divide', () => {
  it('should divide two numbers', () => {
    expect(divide(4, 2)).toBe(2);
  });

  it('should throw an error when the first argument is not a number', () => {
    expect(() => divide(undefined, 2)).toThrow('must be a number');
  });

  it('should throw an error when the second argument is not a number', () => {
    expect(() => divide(2, undefined)).toThrow('must be a number');
  });

  it('should prevent division by zero and return 0', () => {
    expect(divide(2, 0)).toBe(0);
  });
});
