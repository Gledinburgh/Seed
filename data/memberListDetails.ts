import { ImemberListDetails } from "../types";
import { powderedWigMachineDetails } from "../data/portfolioDetails/powderedWigMachineDetails";
import { wildHoneyPotDetails } from "../data/portfolioDetails/wildHoneyPotDetails";



export const memberListMap = {
  "powderedWigMachine": {
    "type": "member",
    "title": "Powdered Wig Machine",
    "description": powderedWigMachineDetails.description,
    "panel": "Brandon.jpg",
    "href": "PowderedWigMachine",
    "alt": "Image of costumed performers speaking on stage",
    "profile": "profile_placeholder.png",
    "tags": ["Performance", "Music", "Writing"],
  },
  "hatedBodies": {
    "type": "member",
    "title": "Hated Bodies",
    "description": null,
    "panel": "Josh.jpg",
    "href": "",
    "alt": "Image of Musicians playing hardcore music",
    "profile": "profile_placeholder.png",
    "tags": ["Performance", "Music", "Writing"]

  },
  "mauroDeLaTierra": {
    "type": "member",
    "title": "Mauro de la Tierra",
    "description": null,
    "href": "",
    "panel": "Placeholder_2.jpg",
    "alt": "place holder image",
    "profile": "profile_placeholder.png",
    "tags": ["Painting", "Sculpture", "Illustration"]

  },
  "wildhoneypot": {
    "type": "member",
    "title": "Wildhoneypot",
    "description": null,
    "panel": wildHoneyPotDetails.panel,
    "href": "Wildhoneypot",
    "alt": "place holder image",
    "profile": wildHoneyPotDetails.hero.src,
    "tags": ["Performance", "Sculpture", "Illustration"]

  },
  "miaSantiago": {
    "type": "member",
    "title": "Mia Santiago",
    "description": null,
    "panel": "Placeholder_1.jpg",
    "href": "",
    "alt": "place holder image",
    "profile": "profile_placeholder.png",
    "tags": ["Makeup", "Visual Art", "Planning"]

  },
  "theWizard": {
    "type": "member",
    "title": "The Wizard",
    "description": null,
    "panel": "Placeholder_2.jpg",
    "href": "",
    "alt": "place holder image",
    "profile": "profile_placeholder.png",
    "tags": ["Music", "Videography", "A/V"]

  },
  "marlinBogle": {
    "type": "member",
    "title": "Marlin Bogle",
    "description": null,
    "href": "",
    "panel": "Placeholder_3.jpg",
    "alt": "place holder image",
    "profile": "profile_placeholder.png",
    "tags": ["Performance", "Photography", "Planning"]

  },
  "glennEdinburgh": {
    "type": "member",
    "title": "Glenn Edinburgh",
    "description": null,
    "panel": "Placeholder_1.jpg",
    "href": "",
    "alt": "place holder image",
    "profile": "profile_placeholder.png",
    "tags": ["Visual Art", "Web-Design", "Planning"]
  },
  "ravenM": {
    "type": "member",
    "title": "Raven M.",
    "portfolio": null,
    "href": "",
    "panel": "Placeholder_2.jpg",
    "alt": "place holder image",
    "profile": "profile_placeholder.png",
    "tags": ["Administration", "Photography", "Videography"]

  }
}

export const memberListDetails: ImemberListDetails[] = [
  {
    "type": "member",
    "member": "Powdered Wig Machine",
    "panel": memberListMap.powderedWigMachine.panel,
    "link": "PowderedWigMachine",
    "alt": "Image of costumed performers speaking on stage",
    "profile": "profile_placeholder.png",
    "tags": ["Performance", "Music", "Writing"],
  },
  {
    "type": "member",
    "member": "Hated Bodies",
    "panel": "Josh.jpg",
    "link": "",
    "alt": "Image of Musicians playing hardcore music",
    "profile": "profile_placeholder.png",
    "tags": ["Performance", "Music", "Writing"]

  },
  {
    "type": "member",
    "member": "Mauro de la Tierra",
    "link": "",
    "panel": "Placeholder_2.jpg",
    "alt": "place holder image",
    "profile": "profile_placeholder.png",
    "tags": ["Painting", "Sculpture", "Illustration"]

  },
  {
    "type": "member",
    "member": "Wildhoneypot",
    "panel": memberListMap.wildhoneypot.panel,
    "link": "Wildhoneypot",
    "alt": "image of chola Ms. Piggy sticker on lightpost",
    "profile": memberListMap.wildhoneypot.profile,
    "tags": ["Performance", "Sculpture", "Illustration"]

  },
  {
    "type": "member",
    "member": "Mia Santiago",
    "panel": "Placeholder_1.jpg",
    "link": "",
    "alt": "place holder image",
    "profile": "profile_placeholder.png",
    "tags": ["Makeup", "Visual Art", "Planning"]

  },
  {
    "type": "member",
    "member": "The Wizard",
    "panel": "Placeholder_2.jpg",
    "link": "",
    "alt": "place holder image",
    "profile": "profile_placeholder.png",
    "tags": ["Music", "Videography", "A/V"]

  },
  {
    "type": "member",
    "member": "Marlin Bogle",
    "link": "",
    "panel": "Placeholder_3.jpg",
    "alt": "place holder image",
    "profile": "profile_placeholder.png",
    "tags": ["Performance", "Photography", "Planning"]

  },
  {
    "type": "member",
    "member": "Glenn Edinburgh",
    "panel": "Placeholder_1.jpg",
    "link": "",
    "alt": "place holder image",
    "profile": "profile_placeholder.png",
    "tags": ["Visual Art", "Web-Design", "Planning"]
  },
  {
    "type": "member",
    "member": "Raven M.",
    "link": "",
    "panel": "Placeholder_2.jpg",
    "alt": "place holder image",
    "profile": "profile_placeholder.png",
    "tags": ["Administration", "Photography", "Videography"]

  }
]