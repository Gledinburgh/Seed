import { Row, Col } from 'antd';
import Image from 'next/image';

import styles from '../../styles/Explore.module.css';


export default function Test({ member }) {

  return (

    <Col>
      <Row>
        Main image
        <Image
          src={"/Placeholder.jpg"}
          layout="fill"
          objectFit="cover" />
      </Row>
      <Row>
        <nav>
          <a>Gallery</a> |
          <a>Bio</a> |
          <a>Contact</a> |
          <a>Links</a>
        </nav>
      </Row>

      <Row>
        Gallery
      </Row>

      <Row>
        Bio
      </Row>

      <Row>
        Table
      </Row>


    </Col>

  )

}
