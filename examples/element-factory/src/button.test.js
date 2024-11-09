import { screen } from '@testing-library/dom';
import { userEvent } from '@testing-library/user-event';
import { createButton } from './button.js';

describe('createButton', () => {
  beforeEach(() => {
    document.body.replaceChildren(createButton());
  });

  it('should create a button element', () => {
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('should have the text "Click Me"', () => {
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Click Me');
  });

  it('should change the text to "Clicked!" when clicked', async () => {
    const button = screen.getByRole('button');
    await userEvent.click(button);
    expect(button).toHaveTextContent('Clicked!');
  });
});
