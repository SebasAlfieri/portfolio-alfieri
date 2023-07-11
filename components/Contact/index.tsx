import React, { useState } from 'react';
import { IoLogoWhatsapp } from 'react-icons/io';
import { IoMdMail } from 'react-icons/io';
import { AnimatePresence, motion } from 'framer-motion';
import useIsMobile from '@/hooks/use-is-mobile';
import s from './Contact.module.css';

function Contact() {
  const isMobile = useIsMobile();
  const [isHovering, setIsHovering] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleMail = () => {
    if (isMobile) {
      enviarCorreoGmail();
    } else {
      handleClick();
    }
  };

  const handleClick = () => {
    setClicked(true);

    setTimeout(() => {
      setClicked(false);
    }, 3000);
    navigator.clipboard.writeText('sebasalfieri@gmail.com');
  };

  const enviarCorreoGmail = () => {
    const correo = 'sebasalfieri@gmail.com';

    const url = `mailto:${correo}`;
    window.open(url);
  };

  return (
    <motion.section className={s.mainContainer}>
      <h2 id="contact" className={s.mainContainer__contactTitle}>
        Contact me
      </h2>

      <motion.div
        className={s.mainContainer__contactContainer}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}>
        <AnimatePresence>
          {clicked && (
            <motion.div
              className={s.mainContainer__contactContainer__clickContainer}
              initial={{ bottom: '-100px' }}
              animate={{ opacity: 1, bottom: '50px', transition: { duration: 0.7 } }}
              exit={{ bottom: '-100px' }}>
              Copied "sebasalfieri@gmail.com" to clipboard!
            </motion.div>
          )}
        </AnimatePresence>

        <div className={s.mainContainer__contactContainer__contactBoxContainer}>
          <motion.a
            className={s.mainContainer__contactContainer__contactBoxContainer__contactBox}
            onClick={handleMail}
            whileHover={{ scale: 1.05 }}>
            <IoMdMail />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href={'https://wa.me/5491122251843'}
            target="_blank">
            <IoLogoWhatsapp />
          </motion.a>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Contact;
