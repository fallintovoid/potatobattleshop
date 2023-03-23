import React from 'react';
import s from './Styles.module.scss';
import { Montserrat } from 'next/font/google';
import cn from 'classnames';
import Link from 'next/link';
import Image from 'next/image';

const montserrat = Montserrat({
  weight: ['700'],
  subsets: ['latin'],
});

const Header = () => {
  return (
    <div className={cn(s.header, montserrat.className)}>
      <Image
        src="/icons/favicon.png"
        alt="logo"
        width={32}
        height={32}
      />
      <Link href="/">
        <h1 className={s.logo__name}>PotatoeBattleShop</h1>
      </Link>
    </div>
  );
};

export default Header;
