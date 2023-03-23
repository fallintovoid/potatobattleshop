import React, { PropsWithChildren } from 'react';
import Footer from '../Footer';
import Header from '../Header';

import s from './Style.module.scss';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={s.page}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
