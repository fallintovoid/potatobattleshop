import { Montserrat } from 'next/font/google';
import React, { useEffect, useState } from 'react';
import s from './Styles.module.scss';
import cn from 'classnames';
import Image from 'next/image';

const montserrat = Montserrat({
  weight: ['700'],
  subsets: ['latin'],
});

const info = {
  url: 'potatoe.org',
};

const Banner = () => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (isClicked === true) {
      setTimeout(() => {
        setIsClicked(false);
      }, 3000);
    }
  }, [isClicked]);

  const onClickHandler = () => {
    navigator.clipboard.writeText(info.url);
    setIsClicked(true);
  };

  const defaultInnerChilds = (
    <>
      <h3 className={s.banner_url_text}>Unser URl: {info.url}</h3>
      <h3 className={s.banner_url_text_copy}>Copy URL</h3>
    </>
  );
  const isClickedInnerChilds = <h3 className={s.orange}>Copied</h3>;

  return (
    <div className={cn(s.banner, montserrat.className)}>
      <div className={s.banner_left}>
        <h1 className={s.banner_topic}>
          Welcome in{' '}
          <span className={s.orange}>PotatoeBattleShop</span>
        </h1>
        <div className={s.banner_url_wrapper}>
          <div
            className={s.banner_url_inner}
            onClick={onClickHandler}
          >
            {!isClicked ? defaultInnerChilds : isClickedInnerChilds}
          </div>
        </div>
      </div>
      <div className={s.banner_right}>
        <Image
          src="/images/banner.png"
          alt="banner"
          width={800}
          height={800}
          className={s.banner_image}
        />
      </div>
    </div>
  );
};

export default Banner;
