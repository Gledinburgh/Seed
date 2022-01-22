import { RetweetOutlined } from '@ant-design/icons';
import { Card, Avatar, Col } from 'antd';
const { Meta } = Card;

import styles from '../../styles/Explore.module.css';

export default function MemberCard({ member }) {
  const panelPath = "/membersList/Panel/";
  const profilePath = "/membersList/Profile/";

  const Title = ({ member }) => (
    <div className={styles["card-title"]}> {member.member}</div>
  )

  const Description = ({ member }) => {

    if (member.tags) {
      return (
        <div>
          {
            member.tags.map((tag, index) => {
              if (member.tags.length - 1 === index) {
                return <span>{tag}</span>
              } else {
                return (<span>{tag} | </span>)
              }
            })
          }
        </div>
      )
    } else {
      return null;
    }
  }

  const Profile = ({ member }) => {
    if (member.type === "project") { return null }
    return (
      <Col className={styles["profile-image-wrapper"]}>
        <Avatar
          className={styles["profile-image"]}
          src={`${profilePath}${member.profile}`} />
      </Col>
    );
  }



  const Cover = ({ member }) => (

    <div className={styles["cover-wrapper"]}>
      <img
        className={styles["cover-image"]}
        alt={member.alt}
        src={`${panelPath}${member.panel}`}
      />
    </div>

  )

  return (
    <Card
      className={styles["card-wrapper"]}
      bodyStyle={{ padding: "2vh" }}
      hoverable={true}
      cover={<Cover member={member} />}
    >
      <Meta
        avatar={<Profile member={member} />}
        title={<Title member={member} />}
        description={<Description member={member} />}
      />
    </Card >
  )
}

