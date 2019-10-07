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

const TAG_DATABASE = {
  ROLES: {
    PASSION: {
      name: "Passion Project",
      color: TAG_TYPE_TO_COLOR.ROLE
    },
    INTERNSHIP: {
      name: "Internship",
      color: TAG_TYPE_TO_COLOR.ROLE
    },
    GIG: {
      name: "Gig",
      color: TAG_TYPE_TO_COLOR.ROLE
    },
    OPENSOURCE: {
      name: "Open Source Contributor",
      color: TAG_TYPE_TO_COLOR.ROLE
    },
    HACKATHON: {
      name: "Hackathon",
      color: TAG_TYPE_TO_COLOR.ROLE
    }
  },
  BACKEND: {
    DJANGO: {
      name: "Django",
      color: TAG_TYPE_TO_COLOR.BACKEND
    },
    DRF: {
      name: "Django Rest Framework",
      color: TAG_TYPE_TO_COLOR.BACKEND
    },
    SQLITE: {
      name: "SQLite",
      color: TAG_TYPE_TO_COLOR.BACKEND
    },
    POSTGRESQL: {
      name: "PostgreSQL",
      color: TAG_TYPE_TO_COLOR.BACKEND
    },
    PYTHON: {
      name: "Python",
      color: TAG_TYPE_TO_COLOR.BACKEND
    },
    FLASK: {
      name: "Flask",
      color: TAG_TYPE_TO_COLOR.BACKEND
    },
    SWAGGER: {
      name: "Swagger",
      color: TAG_TYPE_TO_COLOR.BACKEND
    },
    CELERY: {
      name: "Celery",
      color: TAG_TYPE_TO_COLOR.BACKEND
    },
    MARIADB: {
      name: "MariaDB",
      color: TAG_TYPE_TO_COLOR.BACKEND
    },
    MYSQL: {
      name: "MySQL",
      color: TAG_TYPE_TO_COLOR.BACKEND
    },
    RQ2: {
      name: "RQ2",
      color: TAG_TYPE_TO_COLOR.BACKEND
    },
    EXPRESS_JS: {
      name: "ExpressJs",
      color: TAG_TYPE_TO_COLOR.BACKEND
    },
    NGINX: {
      name: "nginx",
      color: TAG_TYPE_TO_COLOR.BACKEND
    },
    IPFS: {
      name: "IPFS",
      color: TAG_TYPE_TO_COLOR.BACKEND
    },
    MONGO: {
      name: "MongoDB",
      color: TAG_TYPE_TO_COLOR.BACKEND
    }
  },
  FRONTEND: {
    REACT: {
      name: "React",
      color: TAG_TYPE_TO_COLOR.FRONTEND
    },
    ANGULAR: {
      name: "Angular.io",
      color: TAG_TYPE_TO_COLOR.FRONTEND
    },
    ANGULAR_MATERIAL: {
      name: "Material",
      color: TAG_TYPE_TO_COLOR.FRONTEND
    },
    LEAFLET: {
      name: "Leaflet",
      color: TAG_TYPE_TO_COLOR.FRONTEND
    },
    BULMA: {
      name: "Bulma",
      color: TAG_TYPE_TO_COLOR.FRONTEND
    },
    REDUX: {
      name: "Redux",
      color: TAG_TYPE_TO_COLOR.FRONTEND
    },
    BOOTSTRAP: {
      name: "Bootstrap",
      color: TAG_TYPE_TO_COLOR.FRONTEND
    },
    JQUERY: {
      name: "jQuery",
      color: TAG_TYPE_TO_COLOR.FRONTEND
    }
  },
  OTHER: {
    DISCORD: {
      name: "Discord.py",
      color: TAG_TYPE_TO_COLOR.BACKEND
    },
    SCRAPING: {
      name: "Web Scraping",
      color: TAG_TYPE_TO_COLOR.BACKEND
    },
    PRAW: {
      name: "PRAW",
      color: TAG_TYPE_TO_COLOR.BACKEND
    },
    TKINTER: {
      name: "Tkinter",
      color: TAG_TYPE_TO_COLOR.OTHER
    },
    YOUTUBEDL: {
      name: "youtube-dl",
      color: TAG_TYPE_TO_COLOR.OTHER
    },
    FFMPEG: {
      name: "ffmpeg",
      color: TAG_TYPE_TO_COLOR.OTHER
    },
    PHASER: {
      name: "Phaser",
      color: TAG_TYPE_TO_COLOR.OTHER
    },
    BROWSER_EXTENSION: {
      name: "Browser Extension",
      color: TAG_TYPE_TO_COLOR.OTHER
    },
    PYGAME: {
      name: "Pygame",
      color: TAG_TYPE_TO_COLOR.OTHER
    },
    ECS: {
      name: "ECS",
      color: TAG_TYPE_TO_COLOR.OTHER
    },
    JAVA: {
      name: "Java",
      color: TAG_TYPE_TO_COLOR.OTHER
    },
    LIBGDX: {
      name: "libgdx",
      color: TAG_TYPE_TO_COLOR.OTHER
    }
  },
  INFRA: {
    DOCKER: {
      name: "Docker",
      color: TAG_TYPE_TO_COLOR.INFRA
    }
  }
};

export const PROJECTS = [
  {
    image: BathroomImg,
    name: "Is the Bathroom Available?",
    date: "Summer 2019",
    copy: "Monitor your shared bathroom from the comfort of your chair.",
    tags: [
      TAG_DATABASE.ROLES.PASSION,
      TAG_DATABASE.BACKEND.DJANGO,
      TAG_DATABASE.BACKEND.DRF,
      TAG_DATABASE.BACKEND.SQLITE,
      TAG_DATABASE.FRONTEND.REACT,
      TAG_DATABASE.INFRA.DOCKER
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
      TAG_DATABASE.ROLES.INTERNSHIP,
      TAG_DATABASE.BACKEND.DJANGO,
      TAG_DATABASE.BACKEND.DRF,
      TAG_DATABASE.BACKEND.POSTGRESQL,
      TAG_DATABASE.FRONTEND.REACT,
      TAG_DATABASE.INFRA.DOCKER
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
      TAG_DATABASE.ROLES.PASSION,
      TAG_DATABASE.BACKEND.PYTHON,
      TAG_DATABASE.BACKEND.SQLITE,
      TAG_DATABASE.OTHER.DISCORD,
      TAG_DATABASE.OTHER.SCRAPING,
      TAG_DATABASE.INFRA.DOCKER
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
      TAG_DATABASE.ROLES.PASSION,
      TAG_DATABASE.BACKEND.FLASK,
      TAG_DATABASE.BACKEND.SWAGGER,
      TAG_DATABASE.BACKEND.SQLITE,
      TAG_DATABASE.FRONTEND.ANGULAR,
      TAG_DATABASE.FRONTEND.ANGULAR_MATERIAL,
      TAG_DATABASE.FRONTEND.LEAFLET,
      TAG_DATABASE.INFRA.DOCKER
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
      TAG_DATABASE.ROLES.PASSION,
      TAG_DATABASE.BACKEND.FLASK,
      TAG_DATABASE.BACKEND.SQLITE,
      TAG_DATABASE.BACKEND.CELERY,
      TAG_DATABASE.OTHER.PRAW,
      TAG_DATABASE.FRONTEND.BULMA,
      TAG_DATABASE.INFRA.DOCKER
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
      TAG_DATABASE.ROLES.GIG,
      TAG_DATABASE.BACKEND.FLASK,
      TAG_DATABASE.BACKEND.SWAGGER,
      TAG_DATABASE.BACKEND.MARIADB,
      TAG_DATABASE.FRONTEND.ANGULAR,
      TAG_DATABASE.FRONTEND.ANGULAR_MATERIAL,
      TAG_DATABASE.INFRA.DOCKER
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
      TAG_DATABASE.ROLES.PASSION,
      TAG_DATABASE.BACKEND.PYTHON,
      TAG_DATABASE.OTHER.TKINTER
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
      TAG_DATABASE.ROLES.PASSION,
      TAG_DATABASE.BACKEND.FLASK,
      TAG_DATABASE.BACKEND.MYSQL,
      TAG_DATABASE.BACKEND.RQ2,
      TAG_DATABASE.FRONTEND.BULMA,
      TAG_DATABASE.OTHER.YOUTUBEDL,
      TAG_DATABASE.OTHER.FFMPEG,
      TAG_DATABASE.INFRA.DOCKER
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
      TAG_DATABASE.ROLES.PASSION,
      TAG_DATABASE.BACKEND.FLASK,
      TAG_DATABASE.BACKEND.MYSQL,
      TAG_DATABASE.FRONTEND.ANGULAR,
      TAG_DATABASE.FRONTEND.REDUX,
      TAG_DATABASE.FRONTEND.BOOTSTRAP,
      TAG_DATABASE.INFRA.DOCKER
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
      TAG_DATABASE.ROLES.OPENSOURCE,
      TAG_DATABASE.FRONTEND.JQUERY,
      TAG_DATABASE.OTHER.PHASER
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
      TAG_DATABASE.ROLES.PASSION,
      TAG_DATABASE.BACKEND.FLASK,
      TAG_DATABASE.FRONTEND.BULMA,
      TAG_DATABASE.INFRA.DOCKER
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
      TAG_DATABASE.ROLES.PASSION,
      TAG_DATABASE.FRONTEND.ANGULAR,
      TAG_DATABASE.OTHER.SCRAPING
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
      TAG_DATABASE.ROLES.INTERNSHIP,
      TAG_DATABASE.OTHER.BROWSER_EXTENSION,
      TAG_DATABASE.BACKEND.EXPRESS_JS,
      TAG_DATABASE.BACKEND.MYSQL,
      TAG_DATABASE.FRONTEND.ANGULAR,
      TAG_DATABASE.FRONTEND.BOOTSTRAP
    ],
    links: []
  },
  {
    image: ReppyImg,
    name: "Reppy",
    date: "Summer to Fall 2017",
    copy: "Consolidated reputation management and survey platform.",
    tags: [
      TAG_DATABASE.ROLES.INTERNSHIP,
      TAG_DATABASE.FRONTEND.ANGULAR,
      TAG_DATABASE.FRONTEND.BOOTSTRAP,
      TAG_DATABASE.FRONTEND.REDUX
    ],
    links: []
  },
  {
    image: StreamChainImg,
    name: "StreamChain",
    date: "Winter 2017",
    copy: "Hackathon project. Stream videos to the blockchain.",
    tags: [
      TAG_DATABASE.ROLES.HACKATHON,
      TAG_DATABASE.BACKEND.FLASK,
      TAG_DATABASE.BACKEND.NGINX,
      TAG_DATABASE.BACKEND.IPFS,
      TAG_DATABASE.BACKEND.MONGO
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
      TAG_DATABASE.ROLES.INTERNSHIP,
      TAG_DATABASE.BACKEND.MYSQL,
      TAG_DATABASE.FRONTEND.ANGULAR
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
      TAG_DATABASE.ROLES.PASSION,
      TAG_DATABASE.BACKEND.FLASK,
      TAG_DATABASE.OTHER.TKINTER
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
      TAG_DATABASE.ROLES.PASSION,
      TAG_DATABASE.OTHER.PYGAME,
      TAG_DATABASE.OTHER.ECS
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
      TAG_DATABASE.ROLES.PASSION,
      TAG_DATABASE.OTHER.JAVA,
      TAG_DATABASE.OTHER.LIBGDX
    ],
    links: [
      {
        icon: faGithub,
        url: "https://github.com/tristanmkernan/infinite-paths"
      }
    ]
  }
];
