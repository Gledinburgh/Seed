import styles from '../../styles/Portfolio.module.css';
import { Row, Col, Divider } from 'antd';



export default function Links({ outLinks, contactLinks }) {

  const icons = {
    "youtube": "fab fa-youtube",
    "tiktok": "fab fa-tiktok",
    //"venmo": "fas fa-donate",
    //"cashapp": "fas fa-dollar-sign",
    "instagram": "fab fa-instagram",
    "facebook": "fab fa-facebook-square",
    "twitter": "fab fa-twitter",
    "email": "fas fa-envelope",
    "vimeo": "fab fa-vimeo-v",
    "link": "fas fa-link",
    "spotify": "fab fa-spotify"
  };

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

      <Col flex={1} className={styles["link-column"]}>
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


      <Col flex={1} className={styles["link-column"]}>
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