import { Card, Col, Row } from 'antd';
import { SaveOutlined, ShareAltOutlined, ExpandAltOutlined } from '@ant-design/icons';
const { Meta } = Card;

import styles from '../../styles/Explore.module.css';
import { IEvent } from '../../types';

const panelPath = "";

const Title = ({ event, showModal }) => (
  <div onClick={showModal} className={styles["card-title"]}> {event.title}</div>
)

const Cover = ({ event, showModal }) => (

  <div onClick={showModal}
    className={styles["cover-wrapper"]}>
    <img
      className={styles["cover-image"]}
      alt={event.alt}
      src={`${panelPath}${event.coverImage}`}
    />
  </div>
);

const Details = ({ event, showModal }) => (
  < div onClick={showModal} >
    <div>
      <span>{event.weekday} </span>
      <span>{event.time}</span>
    </div>
    <div>
      <span>{event.location}</span>
      <span> • </span>
      <span>{event.city}, </span>
      <span>{event.state}</span>
    </div>
  </div >
)

const Date = ({ event, showModal }) => (
  <Col onClick={showModal} style={{ padding: "10px", borderRight: "solid" }}>
    < Row >{event.month}</Row >
    < Row >{event.day}</Row >
  </Col >
)


export default function EventCard({ event, showModal }: { event: IEvent, showModal }) {
  return (
    <Card
      className={styles["card-wrapper"]}
      bodyStyle={{ padding: "2vh" }}
      cover={< Cover showModal={showModal} event={event} />}
      actions={[
        <ExpandAltOutlined onClick={showModal} key="expand" />,
        <SaveOutlined key="save" />,
        <ShareAltOutlined key="share" />]}
    >
      <Meta
        avatar={<Date showModal={showModal} event={event} />}
        title={<Title showModal={showModal} event={event} />}
        description={<Details showModal={showModal} event={event} />}

      />
    </Card >
  )
}