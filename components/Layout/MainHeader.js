import styles from '../../styles/Layout.module.css';
import { MenuOutlined } from '@ant-design/icons'

import { Layout, Menu, Breadcrumb, Row } from 'antd';
const { Header } = Layout;


export default function MainHeader() {
  return (
    <Layout>
      <Header >
        <div className={styles.padded}>
          <div className={styles.layer}></div>
          <div className={styles.layer}>
            <span className={styles.menu}><MenuOutlined /></span>
          </div>
          <div className={styles.layer}></div>
        </div>
      </Header>
    </Layout>


  )
}