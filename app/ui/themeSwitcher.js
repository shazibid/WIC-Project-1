'use client';

import React, { useState, useEffect } from 'react';

export default function ThemeSwitcher() {
  // Initialize state by checking if dark-mode class is already on body
  // This ensures we read the correct initial state immediately
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.body.classList.contains('dark-mode');
    }
    return false;
  });

  // Sync state with localStorage and body class on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Determine initial theme: saved preference > system preference > light
    let initialDarkMode = false;
    if (savedTheme === 'dark') {
      initialDarkMode = true;
    } else if (savedTheme === 'light') {
      initialDarkMode = false;
    } else {
      // No saved preference, use system preference
      initialDarkMode = systemPrefersDark;
    }
    
    // Apply theme immediately
    if (initialDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
    
    setIsDarkMode(initialDarkMode);
  }, []);

  // Update body class and localStorage when theme changes
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
    <button id="theme-toggle" className="themeBtn" onClick={handleClick}>
      {isDarkMode ? '🌞  Switch to Light Mode' : '🌙  Switch to Dark Mode'}
    </button>
  );
}