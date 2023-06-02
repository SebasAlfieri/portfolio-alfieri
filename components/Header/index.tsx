import React, { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import s from "./Header.module.css";

interface HeaderProps {
  login?: boolean;
}

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
    >
      <div className={s.header__spotify}>
        <Image
          src="/images/logo-spotify.png"
          alt="bySpotify"
          width={422}
          height={63}
        />
      </div>

      <div className={s.header__mastercard}></div>
    </motion.header>
  );
};

export default Header;
