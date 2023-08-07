import React from 'react';
import { motion } from 'framer-motion';
import s from './ProjectsContainer.module.css';
import useIsMobile from '@/hooks/use-is-mobile';
import { Project } from '@/components';
import { dataset } from '@/lib/dataset';

const ProjectsContainer = () => {
  const isMobile = useIsMobile();
  return (
    <motion.div className={s.container}>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { delay: 0.4 }
        }}
        className={s.container__title}>
        Projects
      </motion.h2>
      <motion.div className={s.container__projectsContainer}>
        {isMobile && (
          <>
            {dataset.Projects.map((item, index) => {
              if (index % 2 === 0) {
                return (
                  <div key={index} className={s.container__projectsContainer__item__itemA}>
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
                  <div key={index} className={s.container__projectsContainer__item__itemB}>
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
                  <div key={index} className={s.container__projectsContainer__item__itemA}>
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
                  <div key={index} className={s.container__projectsContainer__item__itemB}>
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
                  <div key={index} className={s.container__projectsContainer__item__itemC}>
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
    </motion.div>
  );
};
export default ProjectsContainer;
