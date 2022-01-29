import styles from '../../styles/Portfolio.module.css';
import { fontAwsomeIcons as icons } from '../../data/fontAwsomeIcons';

import { Row } from 'antd';
import Image from 'next/image';




export default function Hero({ hero, text }) {
  return (
    <>
      <div className={styles["hero-text"]}>
        {text}
      </div>
    </>
  )
}