import styles from '../../styles/Portfolio.module.css';

import { Row, Col } from 'antd';



export default function Links() {

  return (

    <Row className={styles["nav-wrapper"]}>
      <Col className={styles.col1} />
      <Col className={styles.col3}>
        <nav>
          <a>Gallery</a> |
          <a> Bio</a> |
          <a> Contact</a> |
          <a> Links</a>
        </nav>
      </Col>
      <Col className={styles.col1} />
    </Row >

  )

}