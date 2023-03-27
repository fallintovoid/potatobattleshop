import React from 'react';
import { Modals } from '../../types/modals.interface';
import Modal from '../Modal';
import VipModal from '../ProductModals/Vip';
import VipPlusModal from '../ProductModals/VipPlus';

type Props = {
  title: string;
  onClose: () => void;
};

const ModalSelector = (props: Props) => {
  switch (props.title) {
    case Modals.VIP:
      return <VipModal {...props} />;
    case Modals.VIP_PLUS:
      return <VipPlusModal {...props} />;
    default:
      return <Modal {...props} />;
  }
};

export default ModalSelector;
