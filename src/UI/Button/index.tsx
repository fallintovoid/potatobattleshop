import { Montserrat } from 'next/font/google';
import React, { PropsWithChildren, MouseEvent } from 'react';
import cn from 'classnames';
import s from './Style.module.scss';

const montserrat = Montserrat({
  weight: ['700'],
  subsets: ['latin'],
});

type Props = {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  isActive?: boolean;
};

const Button = ({
  children,
  onClick,
  isActive,
}: PropsWithChildren<Props>) => {
  return (
    <button
      onClick={onClick}
      className={cn(montserrat.className, s.button, {
        [s.active]: isActive,
      })}
    >
      {children}
    </button>
  );
};

export default Button;
