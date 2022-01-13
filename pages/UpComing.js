
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

  return (


    <Col >
      <Row >
        <CardExample />
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