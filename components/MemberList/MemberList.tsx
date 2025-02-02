import MemberCard from './MemberCard';
import Link from 'next/link';
import { Divider, Row, Col } from 'antd';




export default function MemberList({ listDetails }) {

  var year: number;
  const Group = (projectYear) => {
    if (year != projectYear) {
      year = projectYear;
      return (<Divider>{projectYear}</Divider>)
    } else {
      return null
    }
  }

  return (
    <Row justify='center'>
      {
        listDetails.map((listItem, index) => {
          return (
            <Col key={index}>
              {Group(listItem.year)}
              <Link href={!listItem.link ? "Wildhoneypot" : listItem.link}>
                <a> <MemberCard member={listItem} /></a>
              </Link>
            </Col>
          )
        })
      }
    </Row>
  )
}


