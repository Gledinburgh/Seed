import { Drawer, Menu } from 'antd';
import { useState, useEffect } from 'react';
import { siteMap } from '../../data/siteMap';
import { ILink, ISiteLocation } from '../../types/index';

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

  return (
    <Drawer
      title="Site Map"
      placement="right"
      onClose={onClose}
      visible={visible}>
      <div>
        <Menu mode="inline" defaultSelectedKeys={['1']}>
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