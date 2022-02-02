
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

  // create logic to break up links into columns
  // break into groups of 7.
  // if only one left, add it to the previous col

  var siteMap = siteMapArray.slice(1);

  function divideLinks(links) {
    if (links.length < 8) return [links];
    var linkGroups = [];
    var size = 5;
    for (let i = 0; i < links.length; i += size)
      linkGroups.push(links.slice(i, i + size));
    return linkGroups
  }

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
                  <Row gutter={30}>
                    {
                      divideLinks(location.links).map((linkGroup, index) => {
                        return (
                          <Col key={index}>
                            <ul>
                              {

                                linkGroup.map((link, index) => {
                                  return (
                                    <Link key={index}
                                      href={!link.link ? "Wildhoneypot" : link.link}
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
                        )
                      })
                    }

                  </Row>
                </TabPane>
              )
            })
          }
        </Tabs>

      </Footer >
    </>
  )
}