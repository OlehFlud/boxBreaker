// src/components/Timer.js

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { startNewRound } from '../store/actions/gameActions'; // Дії для запуску нової партії

const Timer = ({isActive}) => {
  const [timeLeft, setTimeLeft] = useState(120); // Таймер на 2 хвилини
  const dispatch = useDispatch();

  useEffect(() => {
    if (isActive) {
      if (timeLeft === 0) {
        dispatch(startNewRound()); // Запуск нової партії лутбоксів
      }
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [timeLeft, isActive, dispatch]);

  useEffect(() => {
    if (timeLeft <= 0) {
      setTimeLeft(120)
    }
  }, [timeLeft]);

  return (
    (isActive ?   <div className="timer">
      <h2>Next Round In: {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}</h2>
    </div>: '')
  );
};

export default Timer;
