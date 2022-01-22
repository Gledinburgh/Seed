import { IProjectDetails } from "../types";

export const projectListDetails: IProjectDetails[] = [
  {
    "type": "project",
    "year": 2019,
    "member": "Black Sheep Valentine",
    "panel": "Brandon.jpg",
    "link": "/BlackSheepValentine",
    "alt": "Place holder image",
    "profile": "",
    "tags": ["performance", "vending", "music"]
  },
  {
    "type": "project",
    "year": 2019,
    "member": "Black Sheep 3",
    "panel": "Josh.jpg",
    "link": "/HatedBodies",
    "alt": "Place holder image",
    "profile": "",
    "tags": ["performance", "vending", "music"]

  },
  {
    "type": "project",
    "year": 2021,
    "member": "Fostering Toby",
    "link": "/MauroDeLaTierra",
    "panel": "Placeholder_2.jpg",
    "alt": "Place holder image",
    "profile": "",
    "tags": ["performance", "vending", "music"]

  },
  {
    "type": "project",
    "year": 2018,
    "member": "Black Sheep 2",
    "panel": "Placeholder_3.jpg",
    "link": "/Wildhoneypot",
    "alt": "Place holder image",
    "profile": "",
  },
  {
    "type": "project",
    "year": 2019,
    "member": "Sacrilege",
    "panel": "Placeholder_1.jpg",
    "link": "/MiaSantiago",
    "alt": "Place holder image",
    "profile": "",
  },
  {
    "type": "project",
    "year": 2019,
    "member": "Black Sheep Valentine",
    "panel": "Brandon.jpg",
    "link": "/BlackSheepValentine",
    "alt": "Place holder image",
    "profile": "",
    "tags": ["performance", "vending", "music"]
  },
  {
    "type": "project",
    "year": 2019,
    "member": "Black Sheep Valentine",
    "panel": "Brandon.jpg",
    "link": "/BlackSheepValentine",
    "alt": "Place holder image",
    "profile": "",
    "tags": ["performance", "vending", "music"]
  },
  {
    "type": "project",
    "year": 2019,
    "member": "Black Sheep 3",
    "panel": "Josh.jpg",
    "link": "/HatedBodies",
    "alt": "Place holder image",
    "profile": "",
    "tags": ["performance", "vending", "music"]

  },
  {
    "type": "project",
    "year": 2021,
    "member": "Fostering Toby",
    "link": "/MauroDeLaTierra",
    "panel": "Placeholder_2.jpg",
    "alt": "Place holder image",
    "profile": "",
    "tags": ["performance", "vending", "music"]

  },
].sort((a, b) => {
  return b.year - a.year;
})