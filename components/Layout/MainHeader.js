import styles from '../../styles/Layout.module.css';
import { MenuOutlined } from '@ant-design/icons'

import { Layout, Menu, Breadcrumb, Row } from 'antd';
const { Header } = Layout;


export default function MainHeader() {
  return (
    <Layout>
      <Header >

        <span className={styles.menu}><MenuOutlined /></span>


      </Header>
    </Layout>


  )
}