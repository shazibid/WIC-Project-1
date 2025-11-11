'use client';

import React, { useState, useEffect } from 'react';

export default function ThemeSwitcher() {
  // initialize state based on value in localStorage
  const [isDarkMode, setIsDarkMode] = useState(false);

  // initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialDarkMode = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
    
    setIsDarkMode(initialDarkMode);
  }, []);

  // applies class to body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const handleClick = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <button id="theme-toggle" className="btn" onClick={handleClick}>
      {isDarkMode ? '🌞 Switch to Light Mode' : '🌙 Switch to Dark Mode'}
    </button>
  );
}