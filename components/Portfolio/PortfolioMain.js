import { Row, Col, Carousel } from 'antd';
import Image from 'next/image';
import Hero from './Hero';
import Nav from './Nav';
import Gallery from './Gallery';
import Bio from './Bio';
import Links from './Links';

import styles from '../../styles/Portfolio.module.css';
import { IExhibition, IPortfolioDetails } from '../../types';



import { useEffect, useState, useContext } from 'react';


export default function PortfolioMain({ member }) {

  return (
    <Col>
      <Hero hero={member.hero} text={member.member} />
      <Nav portfolioType={member.type} />
      <Gallery />
      <Bio bio={member.bio} location={member.location} />
      <Links
        portfolioType={member.type}
        outLinks={member.outLinks}
        contactLinks={member.contactLinks}
      />
    </Col >
  )

}
