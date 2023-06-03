import React, { FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import s from './Header.module.css';
import { subtitle } from '@/lib/variants';
import { KnowledgeItem } from '@/components';
import { dataset } from '@/lib/dataset';

interface HeaderProps {
  login?: boolean;
}

const Header = () => {
  return (
    <motion.header className={s.HeaderMainContainer} id="header">
      <div className={s.HeaderItemsContainer}>
        <div className={s.HeaderItemsText}>
          <motion.h1
            className={s.HeaderTitleTop}
            initial={{ opacity: 0 }}
            animate={{ y: [-1000, 0], opacity: 1 }}>
            My name
          </motion.h1>
          <motion.h1
            className={s.HeaderTitleBot}
            initial="hidden"
            animate="visible"
            variants={subtitle}>
            is
            <span className={s.TitleBotSpan}> Sebastian</span>
          </motion.h1>
          <motion.h3
            className={s.HeaderSubtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8 }}>
            I'm a junior developer highly motivated to create and grow.
          </motion.h3>
          <motion.a
            className={s.HeaderContact}
            href="#contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.8 }}>
            Contact me
          </motion.a>
        </div>
        <div className={s.HeaderKnowledges}>
          {dataset.Knowledges.map((item) => (
            <KnowledgeItem title={item.title} background={item.background} color={item.color} />
          ))}
        </div>
      </div>
      <motion.div
        animate={{ y: [-5000, 0] }}
        transition={{ delay: 1, duration: 2 }}
        style={{ backgroundColor: 'red' }}
        className={s.HeaderImgContainer}>
        <Image width={600} height={600} alt="logo" src="/images/iconHeader.png" />
      </motion.div>
    </motion.header>
  );
};

export default Header;
