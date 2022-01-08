import { Row, Col } from 'antd';
import Image from 'next/image';
import MemberPanel from './MemberPanel.js';

import styles from '../../styles/Explore.module.css';
import { memberDetails } from '../../data/memberDetails';

import { useEffect, useState, useContext } from 'react';
import { GeneralContext } from '../../Context/GeneralContext';

import Link from 'next/link'


export default function MemberList() {


  const context = GeneralContext();

  useEffect(() => {
    console.log("useEffect: Members")
    context.setTitle("Members");
  }, [])

  return (
    <content>
      {
        memberDetails.map(member => {
          return (
            <>
              <Link href="PowderedWigMachine">
                <a><MemberPanel member={member} /></a>
              </Link>
            </>
          )
        })
      }
    </content >
  )
}

{/*//
 */}
{/*
 */}
{/*
 //*/}

