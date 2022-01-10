import { Drawer, Menu } from 'antd';
import { useState, useEffect } from 'react';


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
      title="Basic Drawer"
      placement="right"
      onClose={onClose}
      visible={visible}>
      <div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1"> Members </Menu.Item>
          <Menu.Item key="2"> Projects </Menu.Item>
          <Menu.Item key="3"> Get Involved </Menu.Item>
        </Menu>
      </div >
    </Drawer>

  )
}