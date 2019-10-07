import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import OTBPImg from "./assets/img/otbp.png";
import DoppleImg from "./assets/img/dopple.png";
import AITAImg from "./assets/img/aita.png";
import FactionsImg from "./assets/img/factions.png";
import TVSleepImg from "./assets/img/television.png";
import LoopifiImg from "./assets/img/loopifi.png";
import ScarletStudiesImg from "./assets/img/rutgers-r.png";
import AncientBeastImg from "./assets/img/ancientbeast.png";
import FileBinImg from "./assets/img/filebin.png";
import HearthSoundBoardImg from "./assets/img/hs.png";
import GraffitiImg from "./assets/img/graffiti.png";
import ReppyImg from "./assets/img/shield.png";
import StreamChainImg from "./assets/img/streamchain.png";
import DisasterAccountabilityImg from "./assets/img/dap.jpg";
import PyGameImg from "./assets/img/pygame.png";
import LibGDXImg from "./assets/img/libgdx.png";
import DiscordImg from "./assets/img/discord.jpeg";
import BathroomImg from "./assets/img/bathroom.jpg";

const TAG_TYPE_TO_COLOR = {
  FRONTEND: "is-info",
  BACKEND: "is-warning",
  INFRA: "is-danger",
  ROLE: "is-dark",
  OTHER: "is-info"
};

const TAG_DATABASE = {};

export const PROJECTS = [
  {
    image: BathroomImg,
    name: "Is the Bathroom Available?",
    date: "Summer 2019",
    copy: "Monitor your shared bathroom from the comfort of your chair.",
    tags: [
      {
        name: "Passion Project",
        color: TAG_TYPE_TO_COLOR.ROLE
      },
      {
        name: "Django",
        color: TAG_TYPE_TO_COLOR.BACKEND
      },
      {
        name: "Django Rest Framework",
        color: TAG_TYPE_TO_COLOR.BACKEND
      },
      {
        name: "SQLite",
        color: TAG_TYPE_TO_COLOR.BACKEND
      },
      {
        name: "React",
        color: TAG_TYPE_TO_COLOR.FRONTEND
      },
      {
        name: "Docker",
        color: TAG_TYPE_TO_COLOR.INFRA
      }
    ],
    links: [
      {
        icon: faExternalLinkAlt,
        url: "https://bathroom.tmk.name/"
      }
    ]
  },
  {
    image: DoppleImg,
    name: "Dopple",
    date: "Summer 2019",
    copy:
      "Stitch fix for children's clothing. Taking the pain out of dressing your children.",
    tags: [
      {
        name: "Internship",
        color: TAG_TYPE_TO_COLOR.ROLE
      },
      {
        name: "Django",
        color: TAG_TYPE_TO_COLOR.BACKEND
      },
      {
        name: "Django Rest Framework",
        color: TAG_TYPE_TO_COLOR.BACKEND
      },
      {
        name: "PostgreSQL",
        color: TAG_TYPE_TO_COLOR.BACKEND
      },
      {
        name: "React",
        color: TAG_TYPE_TO_COLOR.FRONTEND
      },
      {
        name: "Docker",
        color: TAG_TYPE_TO_COLOR.INFRA
      }
    ],
    links: [
      {
        icon: faExternalLinkAlt,
        url: "https://www.thedopple.com/"
      }
    ]
  },
  {
    image: DiscordImg,
    name: "Discord Bots",
    date: "Summer 2019",
    copy: "Is it Wednesday, my dudes?",
    tags: [
      {
        name: "Passion Project",
        color: TAG_TYPE_TO_COLOR.ROLE
      },
      {
        name: "Python",
        color: TAG_TYPE_TO_COLOR.BACKEND
      },
      {
        name: "SQLite",
        color: TAG_TYPE_TO_COLOR.BACKEND
      },
      {
        name: "Discord.py",
        color: TAG_TYPE_TO_COLOR.BACKEND
      },
      {
        name: "Web Scraping",
        color: TAG_TYPE_TO_COLOR.BACKEND
      },
      {
        name: "Docker",
        color: TAG_TYPE_TO_COLOR.INFRA
      }
    ],
    links: [
      {
        icon: faGithub,
        url: "https://github.com/tristanmkernan/wednesday-discord-bot"
      },
      {
        icon: faGithub,
        url: "https://github.com/tristanmkernan/meme-discord-bot"
      },
      {
        icon: faGithub,
        url: "https://github.com/tristanmkernan/crypto-discord-bot"
      },
      {
        icon: faGithub,
        url: "https://github.com/tristanmkernan/quote-discord-bot"
      }
    ]
  },
  {
    image: OTBPImg,
    name: "Off the Beaten Path",
    date: "Spring 2019",
    copy:
      "Personalized geocaching. Rewrite of previous project by same name with more features and hosting.",
    tags: [
      {
        name: "Passion Project",
        color: TAG_TYPE_TO_COLOR.ROLE
      },
      {
        name: "Flask",
        color: TAG_TYPE_TO_COLOR.BACKEND
      },
      {
        name: "Swagger",
        color: TAG_TYPE_TO_COLOR.BACKEND
      },
      {
        name: "SQLite",
        color: TAG_TYPE_TO_COLOR.BACKEND
      },
      {
        name: "Angular.io",
        color: TAG_TYPE_TO_COLOR.FRONTEND
      },
      {
        name: "Material",
        color: TAG_TYPE_TO_COLOR.FRONTEND
      },
      {
        name: "Leaflet",
        color: TAG_TYPE_TO_COLOR.FRONTEND
      },
      {
        name: "Docker",
        color: TAG_TYPE_TO_COLOR.INFRA
      }
    ],
    links: [
      {
        icon: faGithub,
        url: "https://github.com/off-the-beaten-path"
      },
      {
        icon: faExternalLinkAlt,
        url: "https://otbp.tmk.name/"
      }
    ]
  },
  {
    image: AITAImg,
    name: "Am I the Asshole? Stats",
    date: "Spring 2019",
    copy:
      "Actively parses posts from /r/AmItheAsshole and analyzes the data in order to identify if Reddit truly is the asshole.",
    tags: [
      {
        name: "Passion Project",
        color: TAG_TYPE_TO_COLOR.ROLE
      },
      {
        name: "Flask",
        color: TAG_TYPE_TO_COLOR.BACKEND
      },
      {
        name: "SQLite",
        color: TAG_TYPE_TO_COLOR.BACKEND
      },
      {
        name: "Celery",
        color: TAG_TYPE_TO_COLOR.BACKEND
      },
      {
        name: "PRAW",
        color: TAG_TYPE_TO_COLOR.BACKEND
      },
      {
        name: "Bulma",
        color: TAG_TYPE_TO_COLOR.FRONTEND
      },
      {
        name: "Docker",
        color: TAG_TYPE_TO_COLOR.INFRA
      }
    ],
    links: [
      {
        icon: faGithub,
        url: "https://github.com/tristanmkernan/aita"
      },
      {
        icon: faExternalLinkAlt,
        url: "https://aita.tmk.name/"
      }
    ]
  },
  {
    image: FactionsImg,
    name: "Factions",
    date: "Spring 2019",
    copy: "Lead your faction to victory through diplomacy, intrigue, and war.",
    tags: [
      {
        name: "Gig",
        color: TAG_TYPE_TO_COLOR.ROLE
      },
      {
        name: "Flask",
        color: TAG_TYPE_TO_COLOR.BACKEND
      },
      {
        name: "Swagger",
        color: TAG_TYPE_TO_COLOR.BACKEND
      },
      {
        name: "MariaDB",
        color: TAG_TYPE_TO_COLOR.BACKEND
      },
      {
        name: "Angular.io",
        color: TAG_TYPE_TO_COLOR.FRONTEND
      },
      {
        name: "Material",
        color: TAG_TYPE_TO_COLOR.FRONTEND
      },
      {
        name: "Docker",
        color: TAG_TYPE_TO_COLOR.INFRA
      }
    ],
    links: []
  },
  {
    image: TVSleepImg,
    name: "TV Sleep",
    date: "Fall 2018",
    copy:
      'Brings the missing "sleep" function of television sets to your computer. In other words, it puts the computer to sleep after a delay. Perfect for late night Netflix or Twitch sessions.',
    tags: [
      {
        name: "Passion Project",
        color: TAG_TYPE_TO_COLOR.ROLE
      },
      {
        name: "Python",
        color: TAG_TYPE_TO_COLOR.OTHER
      },
      {
        name: "Tkinter",
        color: TAG_TYPE_TO_COLOR.OTHER
      }
    ],
    links: [
      {
        icon: faGithub,
        url: "https://github.com/tristanmkernan/tvsleep"
      },
      {
        icon: faExternalLinkAlt,
        url: "https://pypi.org/project/tvsleep/"
      }
    ]
  },
  {
    image: LoopifiImg,
    name: "Project Loopifi",
    date: "Fall 2018",
    copy: "Finds and exports smooth-looping segments within a YouTube video.",
    tags: [
      {
        name: "Passion Project",
        color: TAG_TYPE_TO_COLOR.ROLE
      },
      {
        name: "Flask",
        color: TAG_TYPE_TO_COLOR.BACKEND
      },
      {
        name: "MySQL",
        color: TAG_TYPE_TO_COLOR.BACKEND
      },
      {
        name: "RQ2",
        color: TAG_TYPE_TO_COLOR.BACKEND
      },
      {
        name: "Bulma",
        color: TAG_TYPE_TO_COLOR.FRONTEND
      },
      {
        name: "youtube-dl",
        color: TAG_TYPE_TO_COLOR.OTHER
      },
      {
        name: "ffmpeg",
        color: TAG_TYPE_TO_COLOR.OTHER
      },
      {
        name: "Docker",
        color: TAG_TYPE_TO_COLOR.INFRA
      }
    ],
    links: [
      {
        icon: faGithub,
        url: "https://github.com/nyavramov/loopifi"
      },
      {
        icon: faExternalLinkAlt,
        url: "https://loopifi.com/"
      }
    ]
  },
  {
    image: ScarletStudiesImg,
    name: "Scarlet Studies",
    date: "Summer 2018",
    copy:
      "A custom forum software for university. Communicate with other students in your courses, manage deadlines, and work collaboratively to achieve academic success.",
    tags: [
      {
        name: "Passion Project",
        color: TAG_TYPE_TO_COLOR.ROLE
      },
      {
        name: "Flask",
        color: TAG_TYPE_TO_COLOR.BACKEND
      },
      {
        name: "MySQL",
        color: TAG_TYPE_TO_COLOR.BACKEND
      },
      {
        name: "Angular.io",
        color: TAG_TYPE_TO_COLOR.FRONTEND
      },
      {
        name: "Redux",
        color: TAG_TYPE_TO_COLOR.FRONTEND
      },
      {
        name: "Bootstrap",
        color: TAG_TYPE_TO_COLOR.FRONTEND
      },
      {
        name: "Docker",
        color: TAG_TYPE_TO_COLOR.INFRA
      }
    ],
    links: [
      {
        icon: faGithub,
        url: "https://github.com/ScarletStudies"
      }
    ]
  },
  {
    image: AncientBeastImg,
    name: "Ancient Beast",
    date: "Summer 2018",
    copy: "Browser-based, multiplayer tactical chess-like game.",
    tags: [
      {
        name: "Open Source Contributor",
        color: TAG_TYPE_TO_COLOR.ROLE
      },
      {
        name: "jQuery",
        color: TAG_TYPE_TO_COLOR.FRONTEND
      },
      {
        name: "Phaser",
        color: TAG_TYPE_TO_COLOR.OTHER
      }
    ],
    links: [
      {
        icon: faGithub,
        url: "https://github.com/FreezingMoon/AncientBeast"
      },
      {
        icon: faExternalLinkAlt,
        url: "https://ancientbeast.com/"
      }
    ]
  },
  {
    image: FileBinImg,
    name: "FileBin",
    date: "Spring 2018",
    copy:
      "Still using email to send small files quickly between your phone(s) and computer(s)? Fret no more!",
    tags: [
      {
        name: "Passion Project",
        color: TAG_TYPE_TO_COLOR.ROLE
      },
      {
        name: "Flask",
        color: TAG_TYPE_TO_COLOR.BACKEND
      },
      {
        name: "Bulma",
        color: TAG_TYPE_TO_COLOR.FRONTEND
      },
      {
        name: "Docker",
        color: TAG_TYPE_TO_COLOR.INFRA
      }
    ],
    links: [
      {
        icon: faGithub,
        url: "https://github.com/tristanmkernan/filebin"
      },
      {
        icon: faExternalLinkAlt,
        url: "https://bin.tmk.name/"
      }
    ]
  },
  {
    image: HearthSoundBoardImg,
    name: "HearthSoundBoard",
    date: "Fall 2017",
    copy: 'For spamming "How long can this go on?"',
    tags: [
      {
        name: "Passion Project",
        color: TAG_TYPE_TO_COLOR.ROLE
      },
      {
        name: "Angular.io",
        color: TAG_TYPE_TO_COLOR.FRONTEND
      },
      {
        name: "Web Scraping",
        color: TAG_TYPE_TO_COLOR.OTHER
      }
    ],
    links: [
      {
        icon: faGithub,
        url: "https://github.com/tristanmkernan/hearthsoundboard"
      },
      {
        icon: faExternalLinkAlt,
        url: "https://tristanmkernan.github.io/hearthsoundboard/"
      }
    ]
  },
  {
    image: GraffitiImg,
    name: "Graffiti Over",
    date: "Summer to Fall 2017",
    copy:
      "Snapchat, but re-imagined for the web. Graffiti over websites and share with your friends.",
    tags: [
      {
        name: "Internship",
        color: TAG_TYPE_TO_COLOR.ROLE
      },
      {
        name: "Browser Extension",
        color: TAG_TYPE_TO_COLOR.OTHER
      },
      {
        name: "ExpressJs",
        color: TAG_TYPE_TO_COLOR.BACKEND
      },
      {
        name: "MySQL",
        color: TAG_TYPE_TO_COLOR.BACKEND
      },
      {
        name: "Angular.io",
        color: TAG_TYPE_TO_COLOR.FRONTEND
      },
      {
        name: "Bootstrap",
        color: TAG_TYPE_TO_COLOR.FRONTEND
      }
    ],
    links: []
  },
  {
    image: ReppyImg,
    name: "Reppy",
    date: "Summer to Fall 2017",
    copy: "Consolidated reputation management and survey platform.",
    tags: [
      {
        name: "Internship",
        color: TAG_TYPE_TO_COLOR.ROLE
      },
      {
        name: "Angular.io",
        color: TAG_TYPE_TO_COLOR.FRONTEND
      },
      {
        name: "Bootstrap",
        color: TAG_TYPE_TO_COLOR.FRONTEND
      },
      {
        name: "Redux",
        color: TAG_TYPE_TO_COLOR.FRONTEND
      }
    ],
    links: []
  },
  {
    image: StreamChainImg,
    name: "StreamChain",
    date: "Winter 2017",
    copy: "Hackathon project. Stream videos to the blockchain.",
    tags: [
      {
        name: "Hackathon",
        color: TAG_TYPE_TO_COLOR.ROLE
      },
      {
        name: "Flask",
        color: TAG_TYPE_TO_COLOR.BACKEND
      },
      {
        name: "nginx",
        color: TAG_TYPE_TO_COLOR.BACKEND
      },
      {
        name: "IPFS",
        color: TAG_TYPE_TO_COLOR.BACKEND
      },
      {
        name: "MongoDB",
        color: TAG_TYPE_TO_COLOR.BACKEND
      }
    ],
    links: [
      {
        icon: faGithub,
        url: "https://github.com/eaglewudev/blackbox"
      }
    ]
  },
  {
    image: DisasterAccountabilityImg,
    name: "Disaster Accountability Project",
    date: "Summer 2016 to Summer 2017",
    copy: "Bringing accountability to disaster aid relief organizations.",
    tags: [
      {
        name: "Internship",
        color: TAG_TYPE_TO_COLOR.ROLE
      },
      {
        name: "MySQL",
        color: TAG_TYPE_TO_COLOR.BACKEND
      },
      {
        name: "Angular.io",
        color: TAG_TYPE_TO_COLOR.FRONTEND
      },
      {
        name: "Materialize.css",
        color: TAG_TYPE_TO_COLOR.FRONTEND
      }
    ],
    links: []
  },
  {
    image: HearthSoundBoardImg,
    name: "DraftWithMe",
    date: "Summer 2016",
    copy:
      "Live stream your HearthStone arena drafts to your friends and the public.",
    tags: [
      {
        name: "Passion Project",
        color: TAG_TYPE_TO_COLOR.ROLE
      },
      {
        name: "Flask",
        color: TAG_TYPE_TO_COLOR.BACKEND
      },
      {
        name: "Tkinter",
        color: TAG_TYPE_TO_COLOR.OTHER
      }
    ],
    links: [
      {
        icon: faGithub,
        url: "https://github.com/tristanmkernan/draft-with-me-server"
      },
      {
        icon: faGithub,
        url: "https://github.com/tristanmkernan/draft-with-me-client"
      },
      {
        icon: faGithub,
        url: "https://github.com/tristanmkernan/hearthstonecarddetector"
      },
      {
        icon: faGithub,
        url: "://github.com/tristanmkernan/hearthstonearenalogwatcher"
      }
    ]
  },
  {
    image: PyGameImg,
    name: "Wanderer",
    date: "Spring 2016",
    copy: "Totally configurable adventure game.",
    tags: [
      {
        name: "Passion Project",
        color: TAG_TYPE_TO_COLOR.ROLE
      },
      {
        name: "Pygame",
        color: TAG_TYPE_TO_COLOR.OTHER
      },
      {
        name: "ECS",
        color: TAG_TYPE_TO_COLOR.OTHER
      }
    ],
    links: [
      {
        icon: faGithub,
        url: "https://github.com/tristanmkernan/wanderer-game"
      }
    ]
  },
  {
    image: LibGDXImg,
    name: "Infinite Paths",
    date: "Spring 2015",
    copy:
      "Tower defense game in which you can create your own maps to play and share.",
    tags: [
      {
        name: "Passion Project",
        color: TAG_TYPE_TO_COLOR.ROLE
      },
      {
        name: "Java",
        color: TAG_TYPE_TO_COLOR.OTHER
      },
      {
        name: "libgdx",
        color: TAG_TYPE_TO_COLOR.OTHER
      }
    ],
    links: [
      {
        icon: faGithub,
        url: "https://github.com/tristanmkernan/infinite-paths"
      }
    ]
  }
];
