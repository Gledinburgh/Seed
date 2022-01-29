import { memberListDetails } from './memberListDetails';
import { projectListDetails } from './projectListDetails';
import { ILink, ISiteLocation, ISiteMap } from '../types';

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



export const siteMap: ISiteMap = {

  "home": {
    "title": "Home",
    "href": "/",
    "key": 0,
    "description": "Black Sheep arts collective. View artists portfolios and upcomming events",
    "links": [
      {
        "service": "string",
        "link": "'string'",
        "text": 'string',
        "alt": 'string',
      },
    ]
  },
  "projects": {
    "title": "Projects",
    "href": "/Projects",
    "key": 1,
    "description": "Current and past projects, exhibitions, events, and performances ",
    "links": projects,

  },
  "portfolios": {
    "title": "Portfolios",
    "href": "/Members",
    "key": 2,
    "description": "Click on any members to learn more about them",
    "links": portfolios
  },
  "getInvolved": {
    "title": "Get Involved",
    "href": "/GetInvolved",
    "key": 3,
    "description": "Learn more about the collective, view contacts or donate",
    "links": [
      {
        "service": "string",
        "link": "'string'",
        "text": 'string',
        "alt": 'string',
      },
    ]
  },
  "upComing": {
    "title": "Upcoming",
    "href": "/UpComing",
    "key": 4,
    "description": "A list of upcoming black sheep art events, shows, exhibitions and performances",
    "links": [
      {
        "service": "string",
        "link": "UpComing",
        "text": 'Events',
        "alt": 'string',
      },
    ]
  },
}

const siteMaptoArray = () => {

  const arrayMap = [];
  for (var location in siteMap) {
    arrayMap.push(siteMap[location]);
  }
  return arrayMap;
};

export const siteMapArray: ISiteLocation[] = siteMaptoArray();



