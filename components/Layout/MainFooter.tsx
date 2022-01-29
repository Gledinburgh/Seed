
import { Layout, Row, Col, Tabs } from 'antd';
const { Footer } = Layout;
const { TabPane } = Tabs;
import Link from 'next/link'

import styles from '../../styles/Layout.module.css';
import { useEffect } from 'react';

import { siteMapArray } from '../../data/siteMap';


export default function MainFooter() {

  useEffect(() => {
    console.log("useEffect: Footer");
  })
  var siteMap = siteMapArray.slice(1);
  return (
    <>

      <Footer className={styles["padded"]}>


        <Tabs
          tabBarGutter={20}
          defaultActiveKey="1">
          {
            siteMap.map((location, index) => {

              return (
                <TabPane
                  tab={location.title}
                  key={index}
                >
                  <Col >
                    <ul>
                      {
                        location.links.map((link, index) => {
                          return (
                            <Link key={index}
                              href={link.link}
                            >
                              <a>
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

      </Footer >
    </>
  )
}