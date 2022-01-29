import MainHeader from './MainHeader';
import SideMenu from './SideMenu';
import MainFooter from './MainFooter';
import { Layout } from 'antd';

import { useEffect, useState } from 'react';

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
      <SideMenu
        visibility={menuVisibility}
        toggleMenuVisibility={toggleMenuVisibility}
      />
      <main>{children}</main>
      <MainFooter />
    </Layout>
  )
}