import React from 'react';
import Modal from '../../Modal';
import s from './Style.module.scss';

type Props = {
  title: string;
  onClose: () => void;
};

const VipPlusModal = ({ title, onClose }: Props) => {
  return (
    <Modal title={title} onClose={onClose}>
      💎💡 Zugang zu den exklusiven Chat-Farben:
      <ul className={s.list}>
        <li>💚 Hellgrün</li>
        <li>💙 Hellblau</li>
        <li>❤️ Hellrot</li>
        <li>💜 Helllila</li>
        <li>💛 Hellgelb</li>
        <li>⚪️ Weiß</li>
        <li>⚫️ Schwarz</li>
        <li>🔵 Dunkelblau</li>
        <li>🟢 Dunkelgrün</li>
        <li>🔴 Dunkelrot</li>
        <li>🟣 Lila</li>
        <li>🏵️ Gold</li>
        <li>⚫️ Grau</li>
        <li>🖤 Dunkelgrau</li>
        <li>💙 Blau</li>
      </ul>
      ✨ Formatierungsoptionen:
      <ul className={s.list}>
        <li>💪 Fett</li>
        <li>✏️ Durchgestrichen</li>
        <li>🖍️ Unterstrichen</li>
        <li>🍥 Kursiv</li>
      </ul>
      💎💨 Exklusives &quot;VIP-Diamantenlauf&quot; Cosmetic 💎💨 💎
      Während du läufst, spawnen hinter dir funkelnde Diamanten! 💎 🎉
      Zugang zu besonderen Veranstaltungen und Aktionen, die nur für
      VIP+ &apos;s verfügbar sind
    </Modal>
  );
};

export default VipPlusModal;
