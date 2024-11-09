import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Counter } from './counter';

import '@testing-library/jest-dom/vitest';

describe('Counter ', () => {
  beforeEach(() => {
    render(<Counter />);
  });

  it('renders with an initial count of 0', () => {
    const counter = screen.getByTestId('counter-count');

    expect(counter).toHaveTextContent('0');
  });

  it('disables the "Decrement" and "Reset" buttons when the count is 0', () => {
    const counter = screen.getByTestId('counter-count');
    const decrementButton = screen.getByTestId('decrement-button');
    const resetButton = screen.getByTestId('reset-button');

    expect(counter).toHaveTextContent('0');
    expect(decrementButton).toBeDisabled();
    expect(resetButton).toBeDisabled();
  });

  it('displays "days" when the count is 0', () => {
    const counter = screen.getByTestId('counter-count');
    const counterUnit = screen.getByTestId('counter-unit');

    expect(counter).toHaveTextContent('0');
    expect(counterUnit).toHaveTextContent('days');
  });

  it('increments the count when the "Increment" button is clicked', async () => {
    const counter = screen.getByTestId('counter-count');
    const incrementButton = screen.getByTestId('increment-button');
    const initialCounterValue = +counter.textContent;

    await act(async () => {
      await userEvent.click(incrementButton);
    });

    const newCounterValue = +counter.textContent;

    expect(newCounterValue).toBeGreaterThan(initialCounterValue);
  });

  it('displays "day" when the count is 1', async () => {
    const counter = screen.getByTestId('counter-count');
    const counterUnit = screen.getByTestId('counter-unit');
    const incrementButton = screen.getByTestId('increment-button');

    await act(async () => {
      await userEvent.click(incrementButton);
    });

    expect(counter).toHaveTextContent('1');
    expect(counterUnit).toHaveTextContent('day');
  });

  it('decrements the count when the "Decrement" button is clicked', async () => {
    const counter = screen.getByTestId('counter-count');
    const decrementButton = screen.getByTestId('decrement-button');
    const incrementButton = screen.getByTestId('increment-button');

    await act(async () => {
      await userEvent.click(incrementButton);
    });
    const incrementedCounterValue = +counter.textContent;

    await act(async () => {
      await userEvent.click(decrementButton);
    });
    const finalCounterValue = +counter.textContent;

    expect(finalCounterValue).toBeLessThan(incrementedCounterValue);
  });

  it('does not allow decrementing below 0', async () => {
    const counter = screen.getByTestId('counter-count');
    const decrementButton = screen.getByTestId('decrement-button');
    const initialCounterValue = +counter.textContent;

    await act(async () => {
      await userEvent.click(decrementButton);
    });
    const newCounterValue = +counter.textContent;

    expect(newCounterValue).toBe(initialCounterValue);
  });

  it('resets the count when the "Reset" button is clicked', async () => {
    const counter = screen.getByTestId('counter-count');
    const incrementButton = screen.getByTestId('increment-button');
    const resetButton = screen.getByTestId('reset-button');

    await act(async () => {
      await userEvent.click(incrementButton);
    });

    await act(async () => {
      await userEvent.click(resetButton);
    });

    const counterValue = +counter.textContent;

    expect(counterValue).toBe(0);
  });

  it('disables the "Decrement" and "Reset" buttons when the count is 0', () => {
    const counter = screen.getByTestId('counter-count');
    const decrementButton = screen.getByTestId('decrement-button');
    const resetButton = screen.getByTestId('reset-button');

    expect(counter).toHaveTextContent('0');
    expect(resetButton).toBeDisabled();
    expect(decrementButton).toBeDisabled();
  });

  it('updates the document title based on the count', async () => {
    const counter = screen.getByTestId('counter-count');
    const incrementButton = screen.getByTestId('increment-button');

    await act(async () => {
      await userEvent.click(incrementButton);
    });
    const counterValue = +counter.textContent;

    expect(document.title).toContain(counterValue);
  });
});
