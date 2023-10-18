import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import s from './Header.module.css';
import Link from 'next/link';
import { KnowledgeItem, ScrollDown } from '@/components';
import { dataset } from '@/lib/dataset';

const Header = () => {
  const controls = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      controls.start((i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2 }
      }));
    }, 1000);

    return () => clearTimeout(timer);
  }, [controls]);

  return (
    <motion.header
      className={s.headerMainContainer}
      id="header"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}>
      <div className={s.headerItemsContainer}>
        <div className={s.headerItemsText}>
          <motion.h1
            className={s.headerTitle}
            initial={{ opacity: 0 }}
            animate={{ y: [-300, 0], opacity: 1, transition: { delay: 0.5 } }}>
            My name <br />
            is&nbsp;
            <span className={s.titleBotSpan}>
              {Array.from('Sebastian').map((letter, index) => (
                <motion.span
                  key={index}
                  className="header-title-letter"
                  style={{ display: 'inline-block', opacity: 0, y: -30 }}
                  custom={index}
                  animate={controls}>
                  {letter}
                </motion.span>
              ))}
            </span>
          </motion.h1>
          <motion.h3
            className={s.headerSubtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 3.2, duration: 1 } }}>
            I'm a front end developer highly motivated to create and grow! <br />
            Currently working at:
            <br />
            <Link
              href="https://www.contenidos-digitales.com/"
              title="contenidos-digitales.com"
              target="_blank">
              Contenidos Digitales
            </Link>
            &nbsp;and&nbsp;
            <Link href="https://metros2digital.com/" target="_blank">
              Metros2 Digital
            </Link>
          </motion.h3>
          <motion.div
            className={s.contactButtonAnimation}
            initial={{ opacity: 0, scale: 0.1 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 1, delay: 5, type: 'spring', velocity: 100, bounce: 10 }
            }}>
            <motion.a className={s.headerContact} href="#contact">
              Contact me
            </motion.a>
          </motion.div>
        </div>

        <motion.div className={s.headerKnowledges}>
          {dataset.Knowledges.map((items, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{
                duration: 3,
                delay: index * 0.2 + 4,
                type: 'spring',
                velocity: 100,
                bounce: 10
              }}>
              <KnowledgeItem
                title={items.title}
                background={items.background}
                color={items.color}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <ScrollDown />
    </motion.header>
  );
};

export default Header;
