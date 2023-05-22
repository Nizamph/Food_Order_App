import React, { useState, useEffect } from 'react';

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);
  function HandleOnline() {
    setIsOnline(true);
  }

  function HandleOffline() {
    setIsOnline(false);
  }
  useEffect(() => {
    window.addEventListener('online', HandleOnline);
    window.addEventListener('offline', HandleOffline);

    return () => {
      window.removeEventListener('online', HandleOnline);
      window.removeEventListener('offline', HandleOffline);
    };
  });

  return isOnline;
};

export default useOnline;
