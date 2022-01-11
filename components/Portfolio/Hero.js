import styles from '../../styles/Portfolio.module.css';
import { fontAwsomeIcons as icons } from '../../data/fontAwsomeIcons';

import { Row } from 'antd';
import Image from 'next/image';




export default function Hero({ hero, text }) {
  return (
    <>
      {/* <Row className={styles["hero-image-wrapper"]}>
      Main image
      <Image className={styles["carousel-image"]}
        src={hero}
        layout="fill"
        objectFit="cover" />
    </Row> */}
      <div className={styles["hero-text"]}>
        {text}
      </div>
    </>
  )
}