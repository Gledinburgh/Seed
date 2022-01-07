import { Row, Col, Carousel } from 'antd';
import { YoutubeOutlined } from '@ant-design/icons'
import Gallery from './Gallery'
import Image from 'next/image';

import styles from '../../styles/Portfolio.module.css';


export default function Test({ member }) {

  const portfolioInfo = {

    "member": "Test Member",
    "hero": "/Placeholder_1.jpg",
    "gallery": [
      { "src": "/Placeholder_1.jpg", "alt": "place holder one" },
      { "src": "/Placeholder_2.jpg", "alt": "place holder two" },
      { "src": "/Placeholder_3.jpg", "alt": "place holder three" }
    ],

    "contactLinks": {
      "youtube": {
        "link": "https://www.youtube.com/c/PowderedWigMachineGonnaGetYou",
        "text": "PowderedWigMachineGonnaGetYou",
        "alt": "Powdered Wig Machine youtube channel link"
      },
      "cashApp": "https://cash.app/$powderedwigmachine",
      "venmo": "https://venmo.com/u/powderedwigmachine",
      "tiktok": "https://www.tiktok.com/@powderedwigmachine",
      "twitter": null,
      "instagram": "https://www.instagram.com/powderedwigmachine/",
      "email": null,
    },
    "outLinks": [
      {
        "text:": "The Creative Connection Interview",
        "link": "https://culturecraft.blog/2021/07/17/powdered-wig-machine/"
      },
      {
        "text": "Q & A With Patricia",
        "link": "https://open.spotify.com/episode/0uSWDQVPh47KujL5GHbz1x?si=K1CCoWKPRBm-4GtJNaFuIg"
      },
      {
        "text": "Patricia and the Bra-Lettes [live]",
        "link": "https://youtu.be/Cl2s1LRyI_k"
      },

    ],

    "bio": null,
  };

  const contentStyle = {

    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  }

  return (

    <Col>
      <Row className={styles["hero-image-wrapper"]}>
        Main image
        <Image className={styles["carousel-image"]}
          src={portfolioInfo.hero}
          layout="fill"
          objectFit="cover" />
      </Row>

      <Row className={styles["nav-wrapper"]}>
        <Col className={styles.col1} />
        <Col className={styles.col3}>
          <nav>
            <a>Gallery</a> |
            <a> Bio</a> |
            <a> Contact</a> |
            <a> Links</a>
          </nav>
        </Col>
        <Col className={styles.col1} />


      </Row >

      <Gallery />


      <Row className={styles["bio-wrapper"]}>
        <p className={styles["bio-text"]}>Mauro de la Tierra is a first generation Mexican American from the East Side of San Antonio; a self-taught painter, sculptor, and illustrator. What began with street art transitioned into canvas and beyond. With support from his community, and his mentor, Albert Gonzales, he has been
          self-employed as a full time artist since October 2017. Mauro considers himself community-made and is community-driven. His work focuses on socio-economic challenges and generational struggles such as the prison industrial complex, poverty, addiction, and the deterioration of the earth. His work captures a side of life that is often vilified and ignored while also making a statement of love for humanity. With the use of spray paint, acrylic, and oil paints, Mauro creates heavy textures on canvas in a modern and raw style of whimsical, surreal, abstract expressionism.
          In the same year that Mauro launched himself into art full time, he began leading and collaborating with The Black Sheep Collective, a group of DIY misfit artist extraordinaires. Together they have put on six pop-up gallery exhibitions and performances. His work thus far has been shown in various zines such as High Noon and galleries which have included
          Galleria Eva, Bear & Ink Gallery, Southtown Gallery, Golden Wolf studios, Community Artists' Collective and The Parish. Mauro recently had his 3rd solo exhibition at Not For You Gallery.</p>
      </Row>

      <Row wrap={true} justify={"center"} className={styles["link-wrapper"]}>

        <Col flex={1} className={styles["link-column"]}>
          {
            portfolioInfo.outLinks.map(({ text, link }) => {
              return (
                <Row>
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
          <span>
            <YoutubeOutlined />
            <a href={portfolioInfo.contactLinks.link}>{portfolioInfo.contactLinks.youtube.text}</a>
          </span>


        </Col>

      </Row >


    </Col >

  )

}
