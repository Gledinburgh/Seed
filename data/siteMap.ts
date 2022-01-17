import { memberDetails } from './memberDetails';
import { ILink, ISiteLocation } from '../types';

const portfolios: ILink[] = memberDetails.map((member) => {
  return (
    {
      "service": "",
      "link": member.link,
      "alt": `A link to ${member.member}'s portfolio page`,
      "text": member.member,
    }
  )
});


export const siteMap: ISiteLocation[] = [
  {
    "title": "Home",
    "href": "/",
    "links": [
      {
        "service": "string",
        "link": "'string'",
        "text": 'string',
        "alt": 'string',
      },
    ]
  },
  // {
  //   "title": "Projects",
  //   "href": "/Archive",
  //   "links": [
  //     {
  //       "service": "string",
  //       "link": "'string'",
  //       "text": 'string',
  //       "alt": 'string',
  //     },
  //   ]
  // },
  {
    "title": "Portfolios",
    "href": "/Members",
    "links": portfolios
  },
  // {
  //   "title": "Get Involved",
  //   "href": "/GetInvolved",
  //   "links": [
  //     {
  //       "service": "string",
  //       "link": "'string'",
  //       "text": 'string',
  //       "alt": 'string',
  //     },
  //   ]
  // },
  {
    "title": "Upcoming",
    "href": "/UpComing",
    "links": [
      {
        "service": "string",
        "link": "UpComing",
        "text": 'Events',
        "alt": 'string',
      },
    ]
  },

]
