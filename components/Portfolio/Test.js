import { Row, Col, Carousel } from 'antd';
import Image from 'next/image';

import styles from '../../styles/Portfolio.module.css';


export default function Test({ member }) {

  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  }

  return (

    <Col>
      <Row className={styles["hero-image-wrapper"]}>
        Main image
        <Image
          src={"/Placeholder_1.jpg"}
          layout="fill"
          objectFit="cover" />
      </Row>

      <Row className={styles["nav-wrapper"]}>
        <Col className={styles.col1} />
        <Col className={styles.col3}>
          <nav>
            <a>Gallery</a> |
            <a>Bio</a> |
            <a>Contact</a> |
            <a>Links</a>
          </nav>
        </Col>
        <Col className={styles.col1} />


      </Row >


      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>


      <Row>
        Bio
      </Row>

      <Row>
        Table
      </Row>


    </Col >

  )

}
