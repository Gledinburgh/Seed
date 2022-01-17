import MemberCard from './MemberCard';
import Link from 'next/link';

import { useEffect } from 'react';
import { GeneralContext } from '../../Context/GeneralContext';
import { IMemberDetails } from '../../types';





export default function MemberList({ memberDetails }: { memberDetails: IMemberDetails[] }) {

  const context = GeneralContext();

  useEffect(() => {
    console.log("useEffect: Members")
    context.setTitle("Members");
  }, [])

  return (
    <div>

      {
        memberDetails.map(member => {
          return (
            <>
              <Link href="PowderedWigMachine">
                <a> <MemberCard member={member} /></a>
              </Link>
            </>
          )
        })
      }
    </div>
  )
}


