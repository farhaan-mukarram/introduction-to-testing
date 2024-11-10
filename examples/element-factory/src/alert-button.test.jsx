import { vi } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AlertButton } from './alert-button';

const alertSpy = vi.spyOn(window, 'alert');

describe('AlertButton', () => {
  beforeEach(() => {
    render(<AlertButton />);
  });

  afterEach(() => {});

  it('should render an alert button', async () => {
    const alertButton = screen.getByTestId('alert-btn');

    expect(alertButton).toBeInTheDocument();
  });

  it('should trigger an alert', async () => {
    const messageInput = screen.getByTestId('alert-btn-input');
    const triggerAlertButton = screen.getByTestId('trigger-alert-btn');

    await act(async () => {
      await userEvent.clear(messageInput);
      await userEvent.type(messageInput, 'Hello');
      await userEvent.click(triggerAlertButton);
    });

    expect(alertSpy).toHaveBeenCalledTimes(1);
    expect(alertSpy).toHaveBeenCalledWith('Hello');
  });
});
