import { Layout, Menu, Breadcrumb, Row } from 'antd';
const { Header, Content, Footer } = Layout;
import Image from 'next/image';

import styles from '../styles/Explore.module.css';
import { memberDetails } from '../data/memberDetails';

import { useEffect, useState, useContext } from 'react';
import { GeneralContext } from '../Context/GeneralContext';


export default function MemberList() {

  const panelPath = "/membersList/Panel/"
  const profilePath = "/membersList/Profile/"
  const context = GeneralContext();

  useEffect(() => {
    console.log("useEffect: Members")
    context.setTitle("Members");


  }, [])

  return (


    <Content>
      {
        memberDetails.map(member => {
          console.log('Panel Path', `${panelPath}.${member.panel}`);
          return (

            <Row className={styles.row}>
              <div className={styles.name}>
                <span className={styles["name-text"]}>
                  {member.member}
                </span>

              </div>


              <Image
                className={styles.Image}
                src={`${panelPath}${member.panel}`}
                layout="fill"
                objectFit="cover"
              />
            </Row>
          )
        })
      }

    </Content>


  )
}