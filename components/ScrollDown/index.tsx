import React, { useState, useEffect } from 'react';
import s from './ScrollDown.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactSVG } from 'react-svg';

export const ScrollDown = () => {
  const [scroll, setScroll] = useState(false);

  const hideOnScroll = () => {
    const scrollValue = document.documentElement.scrollTop;
    if (scrollValue > 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', hideOnScroll);

      return () => window.addEventListener('scroll', hideOnScroll);
    }
  }, []);

  return (
    <AnimatePresence>
      {!scroll && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{
            opacity: [0.5, 1],
            y: [-5, 0],
            transition: {
              repeat: Infinity,
              repeatType: 'mirror',
              duration: 2,
              animationType: 'tween'
            }
          }}
          exit={{ opacity: 0, y: -50 }}
          className={s.scrollMainMobile}>
          <ReactSVG src={'/images/arrow.svg'} wrapper="span" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollDown;
