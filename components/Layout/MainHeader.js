import styles from '../../styles/Layout.module.css';

import { Layout, Menu, Breadcrumb } from 'antd';
const { Header } = Layout;


export default function MainHeader() {
  return (
    <Layout>
      <Header >
        <div className={styles.sticky}></div>
      </Header>
    </Layout>


  )
}