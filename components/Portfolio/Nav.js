import styles from '../../styles/Portfolio.module.css';

import { Row, Col } from 'antd';
import { Link as ScrollLink, animateScroll } from "react-scroll";



export default function Nav({ portfolioType }) {

  const scrollSettings = {
    spy: true,
    smooth: true,
    durration: 500,
  }
  var description = "Bio"
  var links = "Links"
  var contacts = "Contacts"

  if (portfolioType === "exhibition") {
    contacts = "Collaborators";
    description = "About";
  }

  if (portfolioType === "person") {

  }

  return (

    <Row className={styles["nav-wrapper"]}>
      <Col className={styles.col1} />
      <Col className={styles.col3}>
        <nav>

          <ScrollLink to="gallery" {...scrollSettings}>Gallery </ScrollLink>
          |
          <ScrollLink to="bio"  {...scrollSettings}> {description} </ScrollLink>
          |
          <ScrollLink to="links"  {...scrollSettings}> Links </ScrollLink>
          |
          <ScrollLink to="links"  {...scrollSettings}> {contacts} </ScrollLink>
        </nav>
      </Col>
      <Col className={styles.col1} />
    </Row >

  )

}