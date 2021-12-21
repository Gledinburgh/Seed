import { Layout, Menu } from 'antd';
const { Sider, Content } = Layout;


export default function SideMenue() {

  return (
    <Sider trigger={null} collapsible collapsed={false}>
      <div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1"> Members </Menu.Item>
          <Menu.Item key="2"> Projects </Menu.Item>
          <Menu.Item key="3"> Get Involved </Menu.Item>
        </Menu>
      </div >
    </Sider>

  )
}