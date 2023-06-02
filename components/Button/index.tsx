import React, { FC } from 'react';
import { ReactSVG } from 'react-svg';
import { motion } from 'framer-motion';
import s from './Button.module.css';
import { ButtonProps } from '@/types/model';

const Button: FC<ButtonProps> = ({ img, label, onClick }) => {
  return (
    <motion.button className={s.button} onClick={onClick}>
      {img && <ReactSVG src={img} wrapper="span" />}
      <div className={s.textContainer}>
        <p>{label}</p>
      </div>
    </motion.button>
  );
};
export default Button;
