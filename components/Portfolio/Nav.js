import styles from '../../styles/Portfolio.module.css';

import { Row, Col } from 'antd';
import { Link as ScrollLink, animateScroll } from "react-scroll";



export default function Nav() {

  const scrollSettings = {
    spy: true,
    smooth: true,
    durration: 500,
  }

  return (

    <Row className={styles["nav-wrapper"]}>
      <Col className={styles.col1} />
      <Col className={styles.col3}>
        <nav>

          <ScrollLink to="gallery" {...scrollSettings}>Gallery </ScrollLink>
          |
          <ScrollLink to="bio"  {...scrollSettings}> Bio </ScrollLink>
          |
          <ScrollLink to="links"  {...scrollSettings}> Links </ScrollLink>
          |
          <ScrollLink to="links"  {...scrollSettings}> Contacts </ScrollLink>
        </nav>
      </Col>
      <Col className={styles.col1} />
    </Row >

  )

}