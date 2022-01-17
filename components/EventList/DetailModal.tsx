
import { Modal, Card, Col, Row } from 'antd';
const { Meta } = Card;

import { IEvent } from '../../types';

import styles from '../../styles/Explore.module.css';

const panelPath = "";

const Title = ({ event }) => (
  <div className={styles["card-title"]}> {event.title}</div>
)

const Cover = ({ event }) => (

  <div className={styles["cover-wrapper"]}>
    <img
      className={styles["cover-image"]}
      alt={event.alt}
      src={`${panelPath}${event.coverImage}`}
    />
  </div>
);

const Details = ({ event }) => (
  <div>
    <p>$15 at the door</p>
    <p>vacination or masks required</p>
    <p>18+ (carded at door)</p>


  </div>
)

const Impotant = ({ event }) => (
  <Col >

  </Col >
)


export default function DetailModal({ eventDetail, isModalVisible, handleCancel }: { eventDetail: IEvent, isModalVisible: boolean, handleCancel }) {



  return (
    <>
      <Modal
        onCancel={handleCancel}
        visible={isModalVisible}
        cancelButtonProps={{ hidden: true }}
        okButtonProps={{ hidden: true }}
      >
        <Card
          className="placeholder"
          cover={<Cover event={eventDetail} />}
        >

          <Row><h2><Title event={eventDetail} /></h2></Row>

          <Col>
            <h2>Date and time</h2>
            <div>Sat, Jan 22, 2022, 9:00 PM CST</div>
            <p></p>
          </Col>

          <Col>
            <h2>Location</h2>
            <div>Carnaval Lounge</div>
            <div>2227 Saint Claude Avenue</div>
            <div>New Orleans, LA 70117</div>
            <div>View Map</div>
            <p></p>
          </Col>
          <Col>
            <h2>About This Event</h2>
            <p>{`Flutterbug & Friends, featuring Flutterbug and Scribbles, the Mudlarks, Dante, Scabies, Cookie Tongue, Patricia and Her Wizard Sluts, and Mauro De La Tiero. Puppetry, Clown Noise, Projections, Magic, and Vendors! Saturday, January 22 at 9pm. $10 in advance and $15 at the door. PS - It's Flutterbug's Birthday!!!`}</p>
          </Col>
          <Col>
            <h2>Details</h2>

          </Col>


          <Meta
            avatar={<Impotant event={eventDetail} />}
            description={<Details event={eventDetail} />}

          />
        </Card>
      </Modal>
    </>
  );
};
