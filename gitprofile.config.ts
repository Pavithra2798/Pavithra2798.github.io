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
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Question your dataset',
          description:
            'No code, Just answers: Built an LLM-powered tool that lets anyone ask questions of their data in plain language, bypassing the need for complex coding and formulae to unlock hidden patterns and make data-driven decisions, effortlessly. Just type in your question, let the application do the rest.',
          imageUrl:
            'https://raw.githubusercontent.com/Pavithra2798/Pavithra2798.github.io/main/images/dataset.jpg',
          link: 'https://github.com/Pavithra2798/Question_Your_Dataset',
        },
        {
          title: 'Multilanguage video summarization',
          description:
            'Ask, translate, summarize - video learning, redefined: Engineered a prototype of a multi-lingual video summarization tool, leveraging LLM that transforms multiple lengthy video content into concise, accessible summaries. Ask questions and receive concise responses across all languages.',
          imageUrl:
            'https://raw.githubusercontent.com/Pavithra2798/Pavithra2798.github.io/main/images/video_summary.jpg',
          link: 'https://github.com/Pavithra2798/Multilanguage_Video_Summarization',
        },
        {
          title: 'Meeting to Article Content Generation',
          description:
            'Turn talk into text, effortlessly: Developed a user-friendly platform that effortlessly converts audio meetings into well-organized articles. Simply upload your meeting recordings, specify your desired length, and receive a well structured article with key points and speaker attribution.',
          imageUrl:
            'https://raw.githubusercontent.com/Pavithra2798/Pavithra2798.github.io/main/images/article.jpg',
          link: 'https://github.com/Pavithra2798/Article_Content_Generation',
        },
        {
          title: 'Multilingual Document Discovery',
          description:
            'Instant information, any language: Created a platform that transforms document search with LLM technology, enabling users to ask questions and receive relevant answers from lengthy documents in their preferred language, simplifying knowledge discovery.',
          imageUrl:
            'https://raw.githubusercontent.com/Pavithra2798/Pavithra2798.github.io/main/images/knowledge_article.jpg',
          link: 'https://github.com/Pavithra2798/Multilanguage_Video_Summarization',
        },
        {
          title: 'Credit Card Fraud Detection',
          description:
            'Clustering out Crime: Applied clustering techniques to uncover subtle anomalies in high-dimensional credit card transaction data. Combined this with a targeted machine learning model to build a proactive fraud detection system, significantly improving the precision of flagged transactions and minimizing false positives.',
          imageUrl:
            'https://raw.githubusercontent.com/Pavithra2798/Pavithra2798.github.io/main/images/credit_fraud.jpg',
          link: 'https://github.com/Pavithra2798/Credit_Card_Fraud_Clustering',
        },
        {
          title: 'CollectionsAI',
          description:
            'Less Calls, Happy Customers: Developed a targeted machine learning model using Random Forest to reduce unnecessary contact attempts for delinquent customers resulting in 66% reduction in contact frequency and increasing customer satisfaction through personalized communications.',
          imageUrl:
            'https://raw.githubusercontent.com/Pavithra2798/Pavithra2798.github.io/main/images/collectionsAI.jpg',
          link: 'https://github.com/Pavithra2798/Question_Your_Dataset',
        }
      ],
    },
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
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
        projects: ['Pavithra2798/Question_Your_Dataset', 'Pavithra2798/Multilanguage_Video_Summarization', 'Pavithra2798/Article_Content_Generation', 'Pavithra2798/Credit_Card_Fraud_Clustering'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
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
    // phone: '',
    email: 'pavithraselvaraj98@gmail.com',
  },
  resume: {
    fileUrl:
      'https://raw.githubusercontent.com/Pavithra2798/Pavithra2798.github.io/main/images/Resume_Pavithra_Kandhasamy_Selvaraj.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Data Analysis',
    'Data Visualization',
    'Machine Learning',
    'LLM',
    'GCP',
    'SQL',
    'Git',
    'Docker',
    'Tekton',
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
      to: 'August 2025',
      companyLink: 'https://www.tigeranalytics.com/',
    },
    {
      company: 'Ford Motor Private Limited',
      position: 'Software engineer - AI/ML',
      from: 'July 2020',
      to: 'November 2024',
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
      institution: 'University of California, Santa Cruz',
      degree: 'Masters in Computer Science and Engineering',
      from: 'August 2025',
      to: 'June 2027',
    },
    {
      institution: 'Coimbatore Institute of Technology',
      degree: 'Bachelors in Computer Science and Engineering',
      from: 'July 2016',
      to: 'September 2020',
    },
    // {
    //   institution: 'Institution Name',
    //   degree: 'Degree',
    //   from: '2012',
    //   to: '2014',
    // },
  ],
  Publications: [
    {
      title: 'Publication Title',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
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
    defaultTheme: 'procyon',

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
      // 'aqua',
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
      // primary: '#fc055b',
      // secondary: '#219aaf',
      // accent: '#e8d03a',
      // neutral: '#2A2730',
      // 'base-100': '#E3E3ED',
      // '--rounded-box': '3rem',
      // '--rounded-btn': '3rem',
      primary: '#e59f4b', // Orange for primary color
      secondary: '#d6e54b', // Yellow for secondary color
      accent: '#4bbce5', // blue accent color
      neutral: '#e59f4b', // Green for neutral color
      'base-100': '#2b2f34', // Dark blue
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
