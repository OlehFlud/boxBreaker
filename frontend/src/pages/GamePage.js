import GameGrid from '../components/GameGrid';
import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom';

const GamePage = () => {
  const { token } = useSelector((state) => state.authReducer);
  const navigate = useNavigate(); // Hook from react-router-dom for navigation

  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  }, [token, navigate]);
  return (
    <div className="game-page w-100">
      <GameGrid />
    </div>
  );
};

export default GamePage;
