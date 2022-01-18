import styles from '../../styles/Portfolio.module.css';

import { Row } from 'antd';
import Details from './Details';



export default function Bio({ bio, location }) {

  return (
    <>
      <div id="bio" style={{ marginTop: "6vh", height: "15vh" }}></div>
      <Row className={styles["bio-wrapper"]}>
        <Details location={location} />
        <p className={styles["bio-text"]}>{bio}</p>
      </Row>
    </>
  )
}

