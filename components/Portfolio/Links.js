import styles from '../../styles/Portfolio.module.css';
import { fontAwsomeIcons as icons } from '../../data/fontAwsomeIcons';

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

  return (

    <Row wrap={true} justify={"center"} className={styles["link-wrapper"]}>

      <Col flex={1} id="links" className={styles["link-column"]}>
        <Row>
          <Divider className={styles["divider-text"]}>
            External Links
          </ Divider>
        </Row>
        {
          outLinks.map(({ text, link }) => {
            return (
              <Row key={link}>
                <a rel="noopener noreferrer"
                  target="_blank"
                  href={link}
                >
                  {text}
                </a>
              </Row>
            );
          })
        }
        <Row> <a>link</a></Row>
        <Row> <a>link</a></Row>
      </Col>


      <Col flex={1} id="contacts" className={styles["link-column"]}>
        <Row>
          <Divider className={styles["divider-text"]}>
            Contacts
          </Divider>
        </Row>
        {
          contactLinks.map((contact) => {
            var icon = null;
            var link = null;

            link = setLink(contact);
            icon = setIcon(contact.service);

            return (
              <Row key={link}>
                <span>
                  <i className={icon}></i>
                  {link}
                </span>
              </Row>
            )


          })
        }


      </Col>

    </Row >
  )
}