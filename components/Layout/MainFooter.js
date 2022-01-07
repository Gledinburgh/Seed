import { Layout, Row, Col } from 'antd';
const { Footer } = Layout;

import styles from '../../styles/Layout.module.css';


export default function MainFooter() {
  return (
    <>

      <Footer className={styles.padded}>
        <div className={styles.layer}></div>

        <Row className={styles["sitemap-links"]} justify="left">

          <Col flex={1}>
            <u>Exhibitions</u>
            <ul>
              <li><a>Sacrilege</a></li>
              <li><a>BlacksheepIII</a></li>
              <li><a>Valentine</a></li>
              <li><a>BlackSheep2</a></li>
            </ul>

          </Col>
          <Col flex={1}>
            <u>Portfolios</u>
            <ul>
              <li><a>Shiela Marie</a></li>
              <li><a>Powdered Wig Machine</a></li>
              <li><a>Mauro de lo Tierra</a></li>
              <li><a>Marlin Bogle</a></li>
              <li><a>The Wizzard</a></li>
              <li><a>Hated Bodies</a></li>
              <li><a>Mia Santiago</a></li>
              <li><a>Raven M</a></li>
              <li><a>Glenn Edinburgh</a></li>
            </ul>
          </Col>

          <Col flex={1}>
            <u>Get Involved</u>
            <ul>
              <li><a>Donate</a></li>
              <li><a>About us</a></li>
              <li><a>Upcomming</a></li>
            </ul>
          </Col>
          <Col flex={.5}></Col>
        </Row>
        <div className={styles.layer}></div>

      </Footer >
    </>
  )
}