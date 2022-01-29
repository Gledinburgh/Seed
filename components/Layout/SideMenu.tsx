import { Drawer, Menu } from 'antd';
import { useState, useEffect } from 'react';
import { siteMapArray as siteMap } from '../../data/siteMap';
import { ISiteLocation } from '../../types/index';
import { GeneralContext } from '../../Context/GeneralContext';


import Link from 'next/link'

export default function SideMenu({ visibility, toggleMenuVisibility }) {

  const siteState = GeneralContext();
  const currentLocation: ISiteLocation = siteState.currentLocation;

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
  }, [visibility, currentLocation])

  return (
    <Drawer
      title="Site Map"
      placement="right"
      onClose={onClose}
      visible={visible}>
      <div>
        <Menu
          mode="inline"
          defaultSelectedKeys={[String(currentLocation.key)]}
          selectedKeys={[String(currentLocation.key)]}
        >
          {
            siteMap.map((page, index) => {
              return (
                <Menu.Item onClick={() => toggleMenuVisibility()} key={page.key}>
                  <Link href={page.href}>
                    {page.title}
                  </Link>
                </Menu.Item>
              )
            })
          }
        </Menu>
      </div >
    </Drawer>

  )
}