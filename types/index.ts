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

export interface siteLocation {
  "title": string,
  "links": ILink[]
}