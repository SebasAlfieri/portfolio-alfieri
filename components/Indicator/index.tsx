import React, { useState } from 'react';
import s from './Indicator.module.css';
import { IoIosArrowDown } from 'react-icons/io';

function Indicator() {
  const [scroll, setScroll] = useState(false);
  const changeClass = () => {
    const scrollValue = document.documentElement.scrollTop;
    if (scrollValue > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener('scroll', changeClass);

  return (
    <div className={s.indicator}>
      <IoIosArrowDown className={scroll ? 'none' : 'indicator'} />
    </div>
  );
}

export default Indicator;
