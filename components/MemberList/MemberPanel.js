import { Row, Col } from 'antd';
// import Image from 'next/image';
import { Image } from 'antd';

import styles from '../../styles/Explore.module.css';
import { memberDetails } from '../../data/memberDetails';

export default function MemberPanel({ member }) {

  const panelPath = "/membersList/Panel/";
  const profilePath = "/membersList/Profile/";

  return (

    <Row className={styles.row}>

      <Col className={styles["profile-wrapper"]}>
        <Row>
          <img
            className={styles["profile-image"]}
            src={`${profilePath}${member.profile}`}
          />
        </Row>
      </Col>

      <Col className={styles["name-wrapper"]}>
        <Row className={styles["name-text"]}>
          {member.member}
        </Row>
      </Col>

      <div className={styles["panel-overlay"]}></div>
      <div className={styles["panel-image"]}>
        <Image

          src={`${panelPath}${member.panel}`}
        />

      </div>


    </Row >
  )

}