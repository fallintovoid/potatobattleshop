import Image from 'next/image';
import React, { PropsWithChildren, useEffect } from 'react';
import { createPortal } from 'react-dom';
import s from './Style.module.scss';

type Props = {
  onClose: () => void;
  title: string;
  isOpen: boolean;
};

const Modal = ({
  onClose,
  title,
  isOpen,
  children,
}: PropsWithChildren<Props>) => {
  const onEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    window.addEventListener('keydown', onEscape);

    return () => {
      document.body.style.overflowY = 'auto';
      window.removeEventListener('keydown', onEscape);
    };
  }, []);
  return createPortal(
    <div className={s.modal_wrapper} onClick={onClose}>
      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        <h1 className={s.modal_topic}>{title}</h1>
        <button className={s.esc_button} onClick={onClose}>
          <Image
            src={'/icons/esc-button-icon.svg'}
            alt="escape"
            height={32}
            width={32}
            className={s.icon}
          />
        </button>
        <main className={s.modal_content}>{children}</main>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
