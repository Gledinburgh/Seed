import styles from '../../styles/Portfolio.module.css';
import { fontAwsomeIcons as icons } from '../../data/fontAwsomeIcons';

import { Row } from 'antd';




export default function Bio({ bio }) {
  return (
    <Row className={styles["bio-wrapper"]}>
      <p className={styles["bio-text"]}>{bio}</p>
    </Row>
  )
}