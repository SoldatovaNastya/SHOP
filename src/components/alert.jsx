import React, { useEffect } from 'react';

function Alert(props) {
  const { message, closeAlert } = props;

  useEffect(() => {
    const timer = setTimeout(() => {
      closeAlert(); // <-- Ваша зависимость
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [closeAlert]); 

  return (
    <div className="alert">
      <p>{message}</p>
      <button onClick={closeAlert}>Close</button>
    </div>
  );
}

export { Alert };
