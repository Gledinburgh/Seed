export interface ILink {
  "service": string,
  "link": string,
  "text": string,
  "alt": string,
}

export interface IImg {
  "src": string,
  "alt": string
}

export interface IPortfolioDetails {
  "type": string,
  "member": string,
  "hero": IImg,
  "gallery": IImg[],
  "contactLinks": ILink[],
  "outLinks": ILink[],
  "resume"?: any,
  "bio": string
}

export interface ISiteLocation {
  "title": string,
  "href": string,
  "links": ILink[]
}

export interface ImemberListDetails {
  "type"?: string,
  "member": string,
  "panel": string,
  "link": string,
  "alt": string,
  "profile": string,
  "tags"?: string[]
}

export interface IProjectDetails extends ImemberListDetails {
  "type": string,
  "year": number,
  "member": string,
  "panel": string,
  "link": string,
  "alt": string,
  "profile": string,
  "tags"?: string[]
}

export interface IEvent {
  "coverImage": string,
  "title": string,
  "alt": string,
  "weekday": string,
  "time": string,
  "location": string,
  "city": string,
  "state": string,
  "day": string,
  "month": string,
}

export interface IExhibition extends IPortfolioDetails {
  "type": "exhibition",
  "member": string,
  "hero": IImg,
  "gallery": IImg[],
  "contactLinks": ILink[],
  "outLinks": ILink[],
  "bio": string,
  "location": {
    "date": {
      "month": string,
      "day": number,
      "year": number
    }
    "name": string,
    "address": {
      "street": string,
      "city": string,
      "state": string,
      "zip": number
    }
  }
}