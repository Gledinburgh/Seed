import MemberCard from './MemberCard';
import Link from 'next/link';
import { Divider } from 'antd';




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
    <div>
      {
        listDetails.map(listItem => {
          return (
            <>
              {Group(listItem.year)}
              <Link href="PowderedWigMachine">
                <a> <MemberCard member={listItem} /></a>
              </Link>
            </>
          )
        })
      }
    </div>
  )
}


