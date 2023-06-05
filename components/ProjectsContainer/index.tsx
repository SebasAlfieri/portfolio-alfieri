import React from 'react';
import { motion } from 'framer-motion';
import s from './ProjectsContainer.module.css';
import useIsMobile from '@/hooks/use-is-mobile';
import { Project } from '@/components';
import { dataset } from '@/lib/dataset';

const ProjectsContainer = () => {
  const isMobile = useIsMobile();
  return (
    <motion.div className={s.mainContainer}>
      {isMobile && (
        <>
          {dataset.Projects.map((item, index) => {
            if (index % 2 === 0) {
              return (
                <div key={index} className={s.mainContainer__item__itemA}>
                  <Project
                    title={item.title}
                    img={item.img}
                    link={item.link}
                    description={item.description}
                    languages={item.languages}
                  />
                </div>
              );
            } else if (index % 2 === 1) {
              return (
                <div key={index} className={s.mainContainer__item__itemB}>
                  <Project
                    title={item.title}
                    img={item.img}
                    link={item.link}
                    description={item.description}
                    languages={item.languages}
                  />
                </div>
              );
            }
            return null;
          })}
        </>
      )}
      {!isMobile && (
        <>
          {dataset.Projects.map((item, index) => {
            if (index % 3 === 0) {
              return (
                <div key={index} className={s.mainContainer__item__itemA}>
                  <Project
                    title={item.title}
                    img={item.img}
                    link={item.link}
                    description={item.description}
                    languages={item.languages}
                  />
                </div>
              );
            } else if (index % 3 === 1) {
              return (
                <div key={index} className={s.mainContainer__item__itemB}>
                  <Project
                    title={item.title}
                    img={item.img}
                    link={item.link}
                    description={item.description}
                    languages={item.languages}
                  />
                </div>
              );
            } else if (index % 3 === 2) {
              return (
                <div key={index} className={s.mainContainer__item__itemC}>
                  <Project
                    title={item.title}
                    img={item.img}
                    link={item.link}
                    description={item.description}
                    languages={item.languages}
                  />
                </div>
              );
            }
            return null;
          })}
        </>
      )}
    </motion.div>
  );
};
export default ProjectsContainer;
