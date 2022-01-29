import styles from '../../styles/Portfolio.module.css';

import { Row } from 'antd';




export default function Details({ location }) {

  if (!location) {
    return (null)
  }

  var date = location.date;
  var name = location.name;
  var address = location.address;

  return (
    <div className={styles["details-wrapper"]}>
      <Row >{date.month} {date.day}, {date.year} </Row>
      <Row>{name} </Row>
      <Row >{address.city}, {address.state} </Row>
    </div>

  )
}