import { Drawer, Menu } from 'antd';
import { useState, useEffect } from 'react';

import Link from 'next/link'

export default function SideMenu({ visibility, toggleMenuVisibility }) {

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };


  const onClose = () => {
    toggleMenuVisibility()
  };
  useEffect(() => {
    console.log("useEffect: Side Menu")
    setVisible(visibility);
  }, [visibility])

  const siteMap = [
    {
      "text": "Home",
      "href": "/",
      "key": 1
    },
    {
      "text": "Portfolios",
      "href": "/Members",
      "key": 2
    },
    {
      "text": "Projects",
      "href": "/Archive",
      "key": 3
    },
    {
      "text": "Get Involved",
      "href": "/GetInvolved",
      "key": 4
    },
    {
      "text": "Up Comming Events",
      "href": "/UpComming",
      "key": 5
    }
  ]

  return (
    <Drawer
      title="Site Map"
      placement="right"
      onClose={onClose}
      visible={visible}>
      <div>
        <Menu mode="inline" defaultSelectedKeys={['1']}>
          {
            siteMap.map((page) => {
              return (
                <Menu.Item onClick={() => toggleMenuVisibility()} key={page.key}>
                  <Link href={page.href}>
                    {page.text}
                  </Link>
                </Menu.Item>
              )
            })
          }
          {/* <Menu.Item onClick={() => toggleMenuVisibility()} key="1">
            <Link href="/">
              Home
            </Link>
          </Menu.Item>

          <Menu.Item key="2"> Members </Menu.Item>
          <Menu.Item key="3"> Projects </Menu.Item>
          <Menu.Item key="4"> Get Involved </Menu.Item> */}
        </Menu>
      </div >
    </Drawer>

  )
}