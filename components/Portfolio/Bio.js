import styles from '../../styles/Portfolio.module.css';

import { Row } from 'antd';
import Details from './Details';



export default function Bio({ quote, bio, location }) {

  return (
    <>
      <div id="bio" style={{ marginTop: "6vh", height: "15vh" }}></div>
      <br />
      <Row className={styles["bio-wrapper"]}>
        <Details location={location} />
        <p style={{ fontweight: "400", textAlign: "center", color: "grey" }}>{quote}</p>
        <br />
        <p className={styles["bio-text"]}>{bio}</p>
        <br />
      </Row>
    </>
  )
}

