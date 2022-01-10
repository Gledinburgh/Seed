import { Row, Col, Carousel } from 'antd';
import Image from 'next/image';
import Hero from './Hero';
import Nav from './Nav';
import Gallery from './Gallery';
import Bio from './Bio';
import Links from './Links';

import styles from '../../styles/Portfolio.module.css';


import { useEffect, useState, useContext } from 'react';


export default function PortfolioMain({ member }) {

  return (


    <Col>

      <Hero hero={member.hero} text={member.member} />

      <Nav />

      <Gallery id="gallery" />

      < Bio id="bio" bio={member.bio} />

      <Links

        outLinks={member.outLinks}
        contactLinks={member.contactLinks}
      />



    </Col >

  )

}
