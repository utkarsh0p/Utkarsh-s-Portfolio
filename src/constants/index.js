const navLinks = [
  {
    id: 1,
    name: 'Projects',
    type: 'project'
  },
  {
    id: 3,
    name: 'Contact',
    type: 'contact'
  },
  {
    id: 4,
    name: 'Resume',
    type: 'resume'
  }
]

const navIcons = [
  {
    id: 1,
    img: '/icons/wifi.svg'
  },
  {
    id: 2,
    img: '/icons/search.svg'
  },
  {
    id: 3,
    img: '/icons/user.svg'
  },
  {
    id: 4,
    img: '/icons/mode.svg'
  }
]

const dockApps = [
  {
    id: 'project',
    name: 'Projects',
    icon: 'finder.png',
    canOpen: true
  },
  {
    id: 'safari',
    name: 'Articles',
    icon: 'safari.png',
    canOpen: true
  },
  {
    id: 'photos',
    name: 'Gallery',
    icon: 'photos.png',
    canOpen: true
  },
  {
    id: 'contact',
    name: 'Contact',
    icon: 'contact.png',
    canOpen: true
  },
  {
    id: 'terminal',
    name: 'Skills',
    icon: 'terminal.png',
    canOpen: true
  }
]

const blogPosts = [
  {
    id: 1,
    date: 'Sep 2, 2025',
    title: 'This is the google Link',
    image: '/images/blog1.png',
    link: 'https://google.com'
  }
]

const techStack = [
  {
    category: 'Frontend',
    items: ['React.js', 'JavaScript']
  },
  {
    category: 'Styling',
    items: ['Tailwind CSS', 'CSS']
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'NestJS']
  },
  {
    category: 'Database',
    items: ['MongoDB', 'MySQL']
  },
  {
    category: 'Dev Tools',
    items: ['Git', 'GitHub', 'Docker']
  }
]

const socials = [
  {
    id: 1,
    text: 'Github',
    icon: '/icons/github.svg',
    bg: '#f4656b',
    link: 'https://github.com/utkarsh0p'
  },
  {
    id: 4,
    text: 'LinkedIn',
    icon: '/icons/linkedin.svg',
    bg: '#05b6f6',
    link: 'https://www.linkedin.com/in/utkarsh-singh-818294246/'
  }
]

const photosLinks = [
  {
    id: 1,
    icon: '/icons/gicon1.svg',
    title: 'Library'
  },
  {
    id: 2,
    icon: '/icons/gicon2.svg',
    title: 'Memories'
  },
  {
    id: 3,
    icon: '/icons/file.svg',
    title: 'Places'
  },
  {
    id: 4,
    icon: '/icons/gicon4.svg',
    title: 'People'
  },
  {
    id: 5,
    icon: '/icons/gicon5.svg',
    title: 'Favorites'
  }
]

const gallery = [
  {
    id: 1,
    img: ''
  },
  {
    id: 2,
    img: ''
  },
  {
    id: 3,
    img: ''
  },
  {
    id: 4,
    img: ''
  }
]

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery
}

const WORK_LOCATION = {
  id: 1,
  type: 'work',
  name: 'Work',
  icon: '/icons/work.svg',
  kind: 'folder',
  children: [
    // ▶ Project 1
    {
      id: 1,
      name: 'Cocktail Gsap Project Frontend',
      icon: '/images/folder.png',
      position: 'top-10 left-5', // icon position inside project
      children: [
        {
          id: 1,
          name: 'Cocktails',
          icon: '/images/safari.png',
          fileType: 'url',
          href: 'https://cocktails-gsap-project.vercel.app/',
          position: 'top-10 right-20'
        }
      ]
    },

    // ▶ Project 2
    {
      id: 2,
      name: 'GPT3 Frontend Project',
      icon: '/images/folder.png',
      position: 'top-60 left-7',
      children: [
        {
          id: 2,
          name: 'GPT3 Frontend',
          fileType: 'url',
          href: 'https://gpt3-frontend-project-gu24.vercel.app/',
          position: 'top-20 left-20'
        }
      ]
    },

    // ▶ Project 3
    {
      id: 3,
      name: 'Buger Shop Project Frontend',
      icon: '/images/folder.png',
      position: 'top-20 left-69',
      children: [
        {
          id: 3,
          name: 'BurgerShop',
          fileType: 'url',
          href: 'https://freelance-burger-shop-site.vercel.app/',
          position: 'top-10 right-20'
        }
      ]
    },

    // ▶ Project 4
    {
      id: 4,
      name: 'MERN Thinkboard Fullstack Project',
      icon: '/images/folder.png',
      position: 'top-70 left-69',
      children: [
        {
          id: 4,
          name: 'MERN Thinkboard',
          fileType: 'url',
          href: 'http://15.206.149.219:5173/',
          position: 'top-10 right-20'
        }
      ]
    }
  ]
}

const ABOUT_LOCATION = {
  id: 2,
  type: 'about',
  name: 'About me',
  icon: '/icons/info.svg',
  kind: 'folder',
  children: [
    {
      id: 1,
      name: 'me.png',
      icon: '/images/image.png',
      kind: 'file',
      fileType: 'img',
      position: 'top-10 left-5',
      imageUrl: '/images/adrian.jpg'
    },
    {
      id: 2,
      name: 'casual-me.png',
      icon: '/images/image.png',
      kind: 'file',
      fileType: 'img',
      position: 'top-28 right-72',
      imageUrl: '/images/adrian-2.jpg'
    },
    {
      id: 3,
      name: 'conference-me.png',
      icon: '/images/image.png',
      kind: 'file',
      fileType: 'img',
      position: 'top-52 left-80',
      imageUrl: '/images/adrian-3.jpeg'
    }
  ]
}

const RESUME_LOCATION = {
  id: 3,
  type: 'resume',
  name: 'Resume',
  icon: '/icons/file.svg',
  kind: 'folder',
  children: [
    {
      id: 1,
      name: 'Resume.pdf',
      icon: '/images/pdf.png',
      kind: 'file',
      fileType: 'pdf'
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    }
  ]
}

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION
}

const INITIAL_Z_INDEX = 1000

const WINDOW_CONFIG = {
  project: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null }
}

export { INITIAL_Z_INDEX, WINDOW_CONFIG }
