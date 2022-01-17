import MemberList from "../components/MemberList/MemberList";
import { memberDetails } from '../data/memberDetails';


export default function Members() {

  return (

    <MemberList memberDetails={memberDetails} />

  )
}