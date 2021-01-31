import React, { useEffect, useState } from 'react';
import './clock.scss';

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

const Clock = ({ offset, location }) => {
  const [time, setTime] = useState(getTimeWithOffset(offset))

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerID);
    }
  });

  const tick = () => {
    setTime(getTimeWithOffset(offset));
  }

  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{time.toLocaleTimeString('en-US')}</div>
    </div>
  );
};

export default Clock;
