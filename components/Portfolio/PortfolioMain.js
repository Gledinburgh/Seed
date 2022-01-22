import { Row, Col, Carousel } from 'antd';
import Image from 'next/image';
import Hero from './Hero';
import Nav from './Nav';
import Gallery from './Gallery';
import Bio from './Bio';
import Links from './Links';

import styles from '../../styles/Portfolio.module.css';

import { useEffect, useState, useContext } from 'react';


export default function PortfolioMain({ portfolio }) {

  return (
    <Col>
      <Hero hero={portfolio.hero} text={portfolio.member} />
      <Nav portfolioType={portfolio.type} />
      <Gallery imagePaths={portfolio.gallery} />
      <Bio bio={portfolio.bio} location={portfolio.location} />
      <Links
        portfolioType={portfolio.type}
        outLinks={portfolio.outLinks}
        contactLinks={portfolio.contactLinks}
      />
    </Col >
  )

}
