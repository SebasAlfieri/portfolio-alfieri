import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import s from './Welcome.module.css';

type WelcomeProps = {
  onAnimationComplete: (data: string) => void;
};

export default function Welcome({ onAnimationComplete }: WelcomeProps) {
  const [animationComplete, setAnimationComplete] = useState<boolean>(false);

  useEffect(() => {
    const animateWelcome = async () => {
      await new Promise((resolve) => setTimeout(resolve, 7000));

      setAnimationComplete(true);
      onAnimationComplete('STATUS_FINISHED');
    };

    animateWelcome();
  }, []);

  return (
    <motion.div className={s.welcome}>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1, 1, 1, 0],
          transition: { duration: 3, type: 'tween', delay: 1 }
        }}>
        Hi there!
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1, 1, 1, 0],
          transition: { duration: 3, type: 'tween', delay: 4 }
        }}>
        Nice to meet you!
      </motion.h1>
    </motion.div>
  );
}
