import MainHeader from './MainHeader';
import SideMenu from './SideMenu';
import MainFooter from './MainFooter';
import Title from './Title';
import { Layout } from 'antd';

import { useEffect, useState, useContext } from 'react';
import { GeneralContext } from '../../Context/GeneralContext';



export default function MainLayout({ children }) {

  const [menuVisibility, setMenuVisibility] = useState(false);

  const toggleMenuVisibility = () => {
    setMenuVisibility(!menuVisibility)
  }


  useEffect(() => {
    console.log('UseEffect: MainLayout')
  }, [])

  return (
    <Layout>
      <MainHeader toggleMenuVisibility={toggleMenuVisibility} />
      <Title />
      <SideMenu
        visibility={menuVisibility}
      />
      <main>{children}</main>
      <MainFooter />
    </Layout>
  )
}