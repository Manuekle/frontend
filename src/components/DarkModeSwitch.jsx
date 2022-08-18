/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';

import { motion } from 'framer-motion';
import Moon from '../assets/svg/moon';
import Sun from '../assets/svg/sun';

function DarkModeSwitch() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
    if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
      console.log('🎉 Dark mode is supported');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30
  };

  const toggleSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <div className="flex justify-center items-center" onClick={toggleSwitch}>
        <button type="button" onClick={toggleSwitch}>
          <motion.div layout transition={spring}>
            <motion.div whileTap={{ rotate: 360 }}>
              {theme === 'dark' ? (
                <Moon className="dark:fill-white fill-black" />
              ) : (
                <Sun className="dark:fill-white fill-black" />
              )}
            </motion.div>
          </motion.div>
        </button>
      </div>
    </>
  );
}

export default DarkModeSwitch;
