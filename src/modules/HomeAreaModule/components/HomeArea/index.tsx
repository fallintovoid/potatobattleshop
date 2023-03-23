import React from 'react';
import Banner from '../Banner';
import s from './Styles.module.scss';

const HomeArea = () => {
  return (
    <div className={s.homepage}>
      <Banner />
    </div>
  );
};

export default HomeArea;
