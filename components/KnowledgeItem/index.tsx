import React, { FC } from 'react';
import { motion } from 'framer-motion';
import s from './KnowledgeItem.module.css';
import { KnowledgeItem } from '@/types/model';
import { item } from '@/lib/variants';

const KnowledgeItem: FC<KnowledgeItem> = ({ background, color, title }) => {
  return (
    <motion.div
      variants={item}
      style={{ backgroundColor: `${background}`, color: `${color}` }}
      className={s.mainContainer}>
      {title}
    </motion.div>
  );
};

export default KnowledgeItem;
