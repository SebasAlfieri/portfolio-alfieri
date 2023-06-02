import Link from 'next/link';
import s from './Footer.module.css';
import { motion } from 'framer-motion';

function Footer() {
  return <motion.footer className={s.mainContainer}>Sebastian Alfieri</motion.footer>;
}

export default Footer;
