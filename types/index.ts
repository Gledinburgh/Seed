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

export interface IMemberDetails {
  "member": string,
  "panel": string,
  "link": string,
  "alt": string,
  "profile": string
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