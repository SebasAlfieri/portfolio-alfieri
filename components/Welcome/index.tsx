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
      // Lógica de animación aquí...
      await new Promise((resolve) => setTimeout(resolve, 10000)); // Ejemplo de espera de 2 segundos para la animación

      setAnimationComplete(true);
      onAnimationComplete('Datos que quieres pasar a Home');
    };

    animateWelcome();
  }, []);

  return (
    <motion.div className={s.welcome}>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1, 1, 1, 0],
          transition: { duration: 4, type: 'tween', delay: 1 }
        }}>
        Hi there!
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1, 1, 1, 0],
          transition: { duration: 4, type: 'tween', delay: 5 }
        }}>
        Nice to meet you!
      </motion.h1>
    </motion.div>
  );
}
