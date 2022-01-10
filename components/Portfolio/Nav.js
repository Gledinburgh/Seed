import styles from '../../styles/Portfolio.module.css';

import { Row, Col } from 'antd';



export default function Links() {

  return (

    <Row className={styles["nav-wrapper"]}>
      <Col className={styles.col1} />
      <Col className={styles.col3}>
        <nav>
          <a href="#gallery">Gallery</a> |
          <a href="#bio"> Bio</a> |
          <a href="#contacts"> Contacts</a> |
          <a href="#links" >Links</a>
        </nav>
      </Col>
      <Col className={styles.col1} />
    </Row >

  )

}