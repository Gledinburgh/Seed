import styles from '../../styles/Portfolio.module.css';
import { fontAwsomeIcons as icons } from '../../data/fontAwsomeIcons';
import Script from 'next/script';


import { Row, Col, Divider } from 'antd';



export default function Links({ outLinks, contactLinks }) {


  function setLink(contact) {
    if (contact && contact.service === "email") {
      return <a className="mailto" href={`mailto:${contact.link}`}>{contact.text}</a>;
    }
    else {
      return (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={contact.link}>
          {contact.text}
        </a>
      )
    }
  }

  function setIcon(service) {

    if (service && icons[service]) {
      return icons[service];
    }
    else if (service) {
      return icons["link"]
    }
  }

  function mapLinks(links) {

    return (

      links.map((contact) => {
        var icon = null;
        var link = null;

        link = setLink(contact);
        icon = setIcon(contact.service);

        if (contact.link) {
          return (
            <Row key={link}>
              <span >
                <span className={styles.icon}>
                  <i className={icon}></i>
                </span>
                {link}
              </span>
            </Row>
          )
        } else {
          return <span />;
        }
      })
    )


  }

  return (
    <>
      <Script src="https://kit.fontawesome.com/1960917441.js" crossOrigin="anonymous"></Script>

      <div id="links" style={{ height: "15vh" }}></div>
      <Row wrap={true} justify={"center"} className={styles["link-wrapper"]}>


        <Col flex={1} className={styles["link-column"]}>
          <Row>
            <Divider className={styles["divider-text"]}>
              External Links
            </ Divider>
          </Row>
          {
            mapLinks(outLinks)
          }

        </Col>


        <Col flex={1} id="contacts" className={styles["link-column"]}>
          <Row>
            <Divider className={styles["divider-text"]}>
              Contacts
            </Divider>
          </Row>
          {
            mapLinks(contactLinks)
          }
        </Col>

      </Row >
    </>
  )
}