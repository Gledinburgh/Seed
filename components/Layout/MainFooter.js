
import { Layout, Row, Col, Tabs } from 'antd';
const { Footer } = Layout;
const { TabPane } = Tabs;
import Link from 'next/link'

import styles from '../../styles/Layout.module.css';

import { siteItems } from '../../types';
import { siteMap } from '../../data/siteMap';


export default function MainFooter() {
  return (
    <>

      <Footer className={styles.padded}>
        <Row className={styles["sitemap-links"]} justify="start">

          <div className={styles.layer}></div>
          <Tabs
            tabBarStyle={{ width: "95vw" }}
            tabBarGutter={"5vw"}
            className={styles.tab}
            defaultActiveKey="2">
            {
              siteMap.map((location, index) => {
                if (location.title === "Home") return (<span></span>)
                return (
                  <TabPane
                    tab={<span >{location.title}</span>}
                    key={index + 1}
                  >
                    <Col >
                      <ul>
                        {
                          location.links.map((link, index) => {
                            return (
                              <Link key={index + 1}
                                href={link.link}
                                alt={link.alt}
                              >
                                <a alt={link.alt}>
                                  <li>{link.text}</li>
                                </a>
                              </Link>
                            )
                          })
                        }
                      </ul>

                    </Col>
                  </TabPane>
                )
              })
            }
          </Tabs>


        </ Row>

      </Footer >
    </>
  )
}