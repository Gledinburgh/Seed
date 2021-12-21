import MainHeader from './MainHeader';
import SideMenue from './SideMenue';
import MainFooter from './MainFooter';
import Title from './Title';
import { Layout } from 'antd';

import { useEffect, useState, useContext } from 'react';
import { GeneralContext } from '../../Context/GeneralContext';



export default function MainLayout({ children }) {

  useEffect(() => {
    console.log('UseEffect: MainLayout')
  }, [])

  return (
    <Layout>
      <MainHeader />
      <Title />
      {/* <SideMenue /> */}
      <main>{children}</main>
      <MainFooter />
    </Layout>
  )
}