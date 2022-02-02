import MemberCard from './MemberCard';
import Link from 'next/link';
import { Divider, Row, Col } from 'antd';




export default function ArchiveList({ listDetails }) {

  var year: number;
  const Group = (projectYear) => {
    if (year != projectYear) {
      year = projectYear;
      return (<Divider>{projectYear}</Divider>)
    } else {
      return null
    }
  }

  var listGroups = groupPorjectByYear(listDetails);


  function groupPorjectByYear(listDetails) {
    var year: number;
    var projectGroups = [];
    var tempGroup = [];

    for (let i = 0; i < listDetails.length; i++) {
      var listItem = listDetails[i];
      if (!year) { year = listItem.year; }

      if (year != listItem.year) { //y:2019 l:2020
        projectGroups.push(tempGroup);
        tempGroup = [];
        year = listItem.year;

      } if (year === listItem.year) {
        tempGroup.push(listItem);
      }

      if (i === listDetails.length - 1) {
        projectGroups.push(tempGroup);
      }

    }
    return projectGroups;
  }

  return (
    <>
      <Row style={{ height: "4vw" }} />
      {
        listGroups.map((group) => {
          return (
            <Row >
              <Divider orientation='center'><h2 style={{ margin: 0, lineHeight: "0" }}>{group[0].year}</h2></Divider>
              <Row justify='start'>
                {
                  group.map((listItem) => {
                    return (
                      <>
                        <Col>
                          <Link href="PowderedWigMachine">
                            <a>
                              <MemberCard member={listItem} />
                            </a>
                          </Link>
                        </Col>
                      </>
                    )
                  })
                }
              </Row>
            </ Row>
          )
        })
      }
    </>
  )
  // return (
  //   <Row justify='center'>
  //     {
  //       listDetails.map(listItem => {
  //         return (
  //           <Col>
  //             {Group(listItem.year)}
  //             <Link href="PowderedWigMachine">
  //               <a> <MemberCard member={listItem} /></a>
  //             </Link>
  //           </Col>
  //         )
  //       })
  //     }
  //   </Row>
  // )
}


