import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GamePage from '../pages/GamePage';
import LoginPage from '../pages/LoginPage';

const AppRouter = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>

        <Route path="/" element={<LoginPage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
