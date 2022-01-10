import { Row, Col, Carousel } from 'antd';
import Links from './Links';
import Gallery from './Gallery';
import Image from 'next/image';

import styles from '../../styles/Portfolio.module.css';


import { useEffect, useState, useContext } from 'react';
import { GeneralContext } from '../../Context/GeneralContext';


export default function PortfolioMain({ member }) {


  const contentStyle = {

    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  }

  return (


    <Col>
      <Row className={styles["hero-image-wrapper"]}>
        Main image
        <Image className={styles["carousel-image"]}
          src={member.hero}
          layout="fill"
          objectFit="cover" />
      </Row>

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

      <Gallery />


      <Row className={styles["bio-wrapper"]}>
        <p className={styles["bio-text"]}>{member.bio}</p>
      </Row>
      <Links outLinks={member.outLinks} contactLinks={member.contactLinks} />



    </Col >

  )

}
