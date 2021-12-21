import { Layout, Menu, Breadcrumb, Row } from 'antd';
const { Header, Content, Footer } = Layout;
import Image from 'next/image';

import styles from '../styles/Explore.module.css';

import { useEffect, useState, useContext } from 'react';
import { GeneralContext } from '../Context/GeneralContext';


export default function MemberList() {
  const context = GeneralContext();

  useEffect(() => {
    console.log("useEffect: Members")
    context.setTitle("Members");

  }, [])

  return (

    <Content>
      <Row className={styles.row}>
        < Image
          className={styles.Image}
          src="/Placeholder_1.jpg"
          layout="fill"
          objectFit="cover"
        />
      </Row>
      <Row className={styles.row}>
        < Image
          className={styles.Image}
          src="/Placeholder_2.jpg"
          layout="fill"
          objectFit="cover"
        />
      </Row>
    </Content>


  )
}