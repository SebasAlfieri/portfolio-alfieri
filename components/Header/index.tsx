import React, { FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import cs from 'classnames';
import { ReactSVG } from 'react-svg';
import s from './Header.module.css';

interface HeaderProps {
  login?: boolean;
}

const Header: FC<HeaderProps> = ({ login }) => {
  const header = cs(s.header, {
    [s.header__login]: login == true
  });

  const logo = cs(s.mastercard, {
    [s.loginMastercard]: login == true
  });

  return (
    <motion.header
      className={header}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}>
      <div className={s.header__spotify}>
        <Image src="/images/logo-spotify.png" alt="bySpotify" width={422} height={63} />
      </div>

      <div className={s.header__mastercard}>
        <ReactSVG
          className={logo}
          src="/icons/logo.svg"
          wrapper="span"
          beforeInjection={(svg: any) => {
            svg.classList.add('svg__icon');
          }}
        />
      </div>
    </motion.header>
  );
};

export default Header;
