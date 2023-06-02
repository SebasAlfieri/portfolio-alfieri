import React, { useState } from 'react';
import { IoLogoWhatsapp } from 'react-icons/io';
import { IoMdMail } from 'react-icons/io';
import { motion } from 'framer-motion';
import s from './Contact.module.css';

function Contact() {
  const [isHovering, setIsHovering] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleClick = () => {
    setClicked(true);
    navigator.clipboard.writeText('sebasalfieri@gmail.com');
  };

  return (
    <motion.section className={s.mainContainer}>
      <h2 id="contact" className={s.mainContainer__contactTitle}>
        Contact me
      </h2>
      <div className={s.mainContainer__contactContainer}>
        {clicked && (
          <div className={s.mainContainer__contactContainer__clickContainer}>
            Copied "sebasalfieri@gmail.com" to clipboard!
          </div>
        )}
      </div>
      <div className={s.mainContainer__popupsContainer}>
        {isHovering && (
          <div className={s.mainContainer__popupsContainer__hoverContainer}>
            Click to copy e-mail to clipboard
          </div>
        )}
      </div>
      <motion.div
        className={s.mainContainer__contactContainer}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}>
        <div className={s.mainContainer__contactContainer__contactBoxContainer}>
          <motion.a
            className={s.mainContainer__contactContainer__contactBoxContainer__contactBox}
            onClick={handleClick}
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
