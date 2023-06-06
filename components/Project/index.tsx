import React, { FC, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import s from './Project.module.css';

import { ProjectProps } from '@/types/model';
import useIsMobile from '@/hooks/use-is-mobile';

const handleClickViewPlaylist = (link: string) => {
  window.open(link, '_blank');
};

const Project: FC<ProjectProps> = ({ title, link, description, languages, img }) => {
  const isMobile = useIsMobile();
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <motion.article
        className={s.mainContainer}
        onClick={() => handleClickViewPlaylist(link)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { delay: 0.4 }
        }}>
        <div className={s.mainContainer__projectDescription}>
          {description}
          <p className={s.mainContainer__projectDescription__languagesIncluded}>{languages}</p>
        </div>

        <Image width={300} height={300} alt={'project link'} src={img} />
      </motion.article>
      {isMobile && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.5, delay: 0.5 } }}
          className={s.title}>
          {title}
        </motion.div>
      )}
      <AnimatePresence>
        {isHovered && !isMobile && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className={s.title}>
            {title}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Project;
