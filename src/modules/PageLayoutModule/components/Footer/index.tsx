import { Montserrat } from 'next/font/google';
import React from 'react';
import cn from 'classnames';
import s from './Styles.module.scss';

const montserrat = Montserrat({
  weight: ['700'],
  subsets: ['latin'],
});

const Footer = () => {
  return (
    <div className={cn(s.footer, montserrat.className)}>
      <h1>PotatoeBattleShop</h1>
      <p>All rights reserved</p>
    </div>
  );
};

export default Footer;
