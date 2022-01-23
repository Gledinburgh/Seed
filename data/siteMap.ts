import { memberListDetails } from './memberListDetails';
import { projectListDetails } from './projectListDetails';
import { ILink, ISiteLocation } from '../types';

const portfolios: ILink[] = memberListDetails.map((member) => {
  return (
    {
      "service": "",
      "link": member.link,
      "alt": `A link to ${member.member}'s portfolio page`,
      "text": member.member,
    }
  )
});

const projects: ILink[] = projectListDetails.map((member) => {
  return (
    {
      "service": "",
      "link": member.link,
      "alt": `A link to  the ${member.member}' project page`,
      "text": member.member,
    }
  )
});


export const siteMap: ISiteLocation[] = [
  {
    "title": "Home",
    "href": "/",
    "key": 0,
    "links": [
      {
        "service": "string",
        "link": "'string'",
        "text": 'string',
        "alt": 'string',
      },
    ]
  },
  {
    "title": "Projects",
    "href": "/Projects",
    "key": 1,
    "links": projects,
  },
  {
    "title": "Portfolios",
    "href": "/Members",
    "key": 2,
    "links": portfolios
  },
  // {
  //   "title": "Get Involved",
  //   "href": "/GetInvolved",
  //    "key":3,

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
    "key": 4,
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
