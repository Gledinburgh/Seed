import styles from '../../styles/Layout.module.css';
import { MenuOutlined } from '@ant-design/icons'

import { Layout } from 'antd';
const { Header } = Layout;


export default function MainHeader({ toggleMenuVisibility }) {
  return (
    <Layout>
      <Header className={styles.header} >

        <span className={styles.menu}>
          <MenuOutlined
            onClick={() => toggleMenuVisibility()} />
        </span>

      </Header>
    </Layout>


  )
}