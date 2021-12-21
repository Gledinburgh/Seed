import { Layout } from 'antd';
const { Footer } = Layout;

import styles from '../../styles/Layout.module.css';


export default function MainFooter() {
  return (
    <>
      <div className={styles.buffer} ></div>
      <Footer className={styles.padded}>
        <div className={styles.layer}></div>
        <div>Table goes here</div>
        <div className={styles.layer}></div>

      </Footer >
    </>
  )
}