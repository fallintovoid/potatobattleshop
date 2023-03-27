import React from 'react';
import Modal from '../../Modal';
import s from './Style.module.scss';

type Props = {
  title: string;
  onClose: () => void;
};

const VipModal = ({ title, onClose }: Props) => {
  return (
    <Modal title={title} onClose={onClose}>
      💬 Chat Farben:
      <ul className={s.list}>
        <li>💧 Aqua</li>
        <li>🔵 Blau</li>
        <li>💪 Fett</li>
        <li>💚 Grün</li>
        <li>🍥 Kursiv</li>
        <li>💕 Rosa</li>
        <li>❤️ Rot</li>
        <li>⚪️ Weiß</li>
        <li>💛 Gelb</li>
      </ul>
      🏆 Exklusives &apos;VIP-GOLD&apos; Cosmetic 💰, das Dich von der
      Masse abhebt 🎉 Zugang zu besonderen Veranstaltungen und
      Aktionen, die nur für VIPs verfügbar sind 💡 Nutze die
      einzigartigen Chat-Farben, um Deine Nachrichten hervorzuheben
      und zu zeigen, dass Du ein VIP bist
    </Modal>
  );
};

export default VipModal;
