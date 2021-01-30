import React, { useState, useEffect } from 'react';

const ConnectionStatus = () => {
  const [isOnline, setOnline] = useState(window.navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
      setOnline(true)
    };

    const handleOffline = () => {
      setOnline(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline ? (
    <div className="status">online</div>
  ) : (
    <div className="status status_offline">offline</div>
  );
};


export default ConnectionStatus;
