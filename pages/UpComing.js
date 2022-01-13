
import { Card, Avatar, Col, Row } from 'antd';
import { SaveOutlined, ShareAltOutlined, ExpandAltOutlined } from '@ant-design/icons';
const { Meta } = Card;


import UnderConstruction from "../components/Layout/UnderConstruction"

export default function UpComing() {

  const CardExample = () => {
    return (
      <Card
        style={{ margin: "2vh", width: "100%" }}
        cover={
          <img
            style={{ height: "20vh", objectFit: "cover" }}
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <ExpandAltOutlined key="expand" />,
          <SaveOutlined key="save" />,
          <ShareAltOutlined key="share" />]}
      >
        <Meta
          avatar={
            <Col style={{ paddingRight: "10px", borderRight: "solid" }}>
              < Row > Jan</Row >
              < Row > 15</Row >

            </Col >
          }
          title="Event title"
          description={
            < div >
              <div>"This is the Time"</div>
              <div>"This is the description"</div>
            </div >}
        />
      </Card >
    )
  }
  const MemberTest = () => {
    return (
      <Card
        style={{ margin: "2vh", width: "100%" }}
        cover={
          <img
            style={{ height: "20vh", objectFit: "cover" }}
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }

      >
        <Meta
          avatar={<Avatar
            style={{ postion: "absolute", top: 0, width: "10vh", height: "10vh" }}
            src="https://joeschmoe.io/api/v1/random" />
          }
          title="Powdered Wig Machine"
          description={
            < div >
              <span>Performace | </span>
              <span>Music| Writing | Art Direction</span>
            </div >}
        />
      </Card >
    )
  }


  return (


    <Col >
      <Row >
        <MemberTest />
      </Row>
      <Row >
        <CardExample />
      </Row>
      <Row >
        <CardExample />
      </Row>
    </Col>

  )
}