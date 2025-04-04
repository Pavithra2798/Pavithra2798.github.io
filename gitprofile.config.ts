// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Pavithra2798', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['Pavithra2798/Question_Your_Dataset', 'Pavithra2798/Multilanguage_Video_Summarization'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Question your dataset',
          description:
            'No code, Just answers: Built an LLM-powered tool that lets anyone ask questions of their data in plain language, bypassing the need for complex coding and formulae to unlock hidden patterns and make data-driven decisions, effortlessly. Just type in your question, let the application do the rest.',
          imageUrl:
            'https://raw.githubusercontent.com/Pavithra2798/Pavithra2798.github.io/main/images/954cef09-ea2a-4966-bed2-56a36847ac22.jpg',
          link: 'https://github.com/Pavithra2798/Question_Your_Dataset',
        },
        {
          title: 'Multilanguage video summarization',
          description:
            'Ask, translate, summarize - video learning, redefined: Engineered a prototype of a multi-lingual video summarization tool, leveraging LLM that transforms multiple lengthy video content into concise, accessible summaries. Ask questions and receive concise responses across all languages.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/Pavithra2798/Multilanguage_Video_Summarization',
        },
        {
          title: 'Credit Card',
          description:
            'Ask natural language questions to your dataset',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/Pavithra2798/Question_Your_Dataset',
        },
        {
          title: 'CollectionsAI',
          description:
            'Less Calls, Happy Customers: Developed a targeted machine learning model using Random Forest to reduce unnecessary contact attempts for delinquent customers resulting in 66% reduction in contact frequency and increasing customer satisfaction through personalized communications.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/Pavithra2798/Question_Your_Dataset',
        }
      ],
    },
  },
  seo: {
    title: 'Portfolio of Pavithra',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'pavithra-selvaraj-a569771a3',
    // x: 'arif_szn',
    // mastodon: 'arifszn@mastodon.social',
    // researchGate: '',
    // facebook: '',
    // instagram: '',
    // reddit: '',
    // threads: '',
    // youtube: '', // example: 'pewdiepie'
    // udemy: '',
    // dribbble: '',
    // behance: '',
    // medium: 'arifszn',
    // dev: 'arifszn',
    // stackoverflow: '', // example: '1/jeff-atwood'
    // skype: '',
    // telegram: '',
    // website: 'https://www.arifszn.com',
    phone: '',
    email: 'pavithraselvaraj98@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Machine Learning',
    'LLM',
    'GCP',
    'MLFlow',
    'Data analysis',
    'SQL',
    'PostgreSQL',
    'Git',
    'Docker',
  ],
  // tools: [
  //   'PHP',
  //   'Laravel',
  //   'JavaScript',
  //   'React.js',
  // ],
  experiences: [
    {
      company: 'Tiger Analytics',
      position: 'Data Scientist',
      from: 'December 2024',
      to: 'Present',
      companyLink: 'https://www.tigeranalytics.com/',
    },
    {
      company: 'Ford Motor Private Limited',
      position: 'Software engineer - AI/ML',
      from: 'November 2024',
      to: 'july 2020',
      companyLink: 'https://www.india.ford.com/about-ford/corporate/company-profile/',
    },
  ],
  // certifications: [
  //   {
  //     name: 'Lorem ipsum',
  //     body: 'Lorem ipsum dolor sit amet',
  //     year: 'March 2022',
  //     link: 'https://example.com',
  //   },
  // ],
  educations: [
    {
      institution: 'Coimbatore Institute of Technology',
      degree: 'Bachelors in Computer Science and Engineering',
      from: '2016',
      to: '2020',
    },
    // {
    //   institution: 'Institution Name',
    //   degree: 'Degree',
    //   from: '2012',
    //   to: '2014',
    // },
  ],
  // Publications: [
  //   {
  //     title: 'Publication Title',
  //     conferenceName: '',
  //     journalName: 'Journal Name',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  //   {
  //     title: 'Publication Title',
  //     conferenceName: 'Conference Name',
  //     journalName: '',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  // ],
  // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many articles to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      // 'cupcake',
      // 'bumblebee',
      // 'emerald',
      // 'corporate',
      // 'synthwave',
      'retro',
      // 'cyberpunk',
      // 'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      // 'lofi',
      // 'pastel',
      // 'fantasy',
      // 'wireframe',
      // 'black',
      // 'luxury',
      // 'dracula',
      // 'cmyk',
      // 'autumn',
      // 'business',
      // 'acid',
      // 'lemonade',
      // 'night',
      // 'coffee',
      // 'winter',
      // 'dim',
      // 'nord',
      // 'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
