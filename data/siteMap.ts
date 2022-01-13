import { memberDetails } from './memberDetails';
import { ILink, siteLocation } from '../types';

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


export const siteMap: siteLocation[] = [
  {
    "title": "Projects",
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
    "title": "Portfolios",
    "links": portfolios
  },
  {
    "title": "Get Involved",
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
    "title": "Upcoming",
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
