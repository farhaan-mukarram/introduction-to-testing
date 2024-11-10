import { useState } from 'react';

export const AlertButton = ({}) => {
  const [message, setMessage] = useState('Alert!');

  return (
    <div data-testid="alert-btn">
      <label>
        Message
        <input
          data-testid="alert-btn-input"
          type="text"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </label>

      <button data-testid="trigger-alert-btn" onClick={() => alert(message)}>
        Trigger Alert
      </button>
    </div>
  );
};
