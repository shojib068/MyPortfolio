// All portfolio content lives here, sourced from portfolio.md.
// Edit this file to update the site — components only handle presentation.

export const profile = {
  name: 'Kawsar Ahmed Shojib',
  firstName: 'Kawsar',
  initials: 'KS',
  // Put your photo in the public/ folder and set its file name here (shown in the hero)
  photo: '/profile.jpg',
  roles: [
    'App Developer using Flutter',
    'Software Engineer',
    'Banking Technology',
    'Temenos T24',
    'Data Science & Applied AI',
  ],
  currentRole: 'App Developer @ YetFix Limited',
  location: 'Savar, Dhaka, Bangladesh',
  availability: 'Open to software engineering, data, and AI-focused opportunities',
  tagline:
    'I build software for real-world problems, with experience in enterprise banking systems and a growing focus on data-driven products, machine learning, and practical AI.',
  about: [
    'I am a Computer Science and Engineering graduate, software engineer and app developer interested in building reliable software and applications for both iOS and Android, understanding complex business workflows, and using data to make systems smarter and safer.',
    'My professional experience includes enterprise core banking technology — working with Temenos T24 for Janata Bank PLC and hands-on delivery in a banking software environment. Now I am working as an App Developer at YetFix Limited. I have also worked on an academic project exploring energy efficiency in enterprise wireless networks.',
    'These experiences shape my interest in applying software engineering, data analysis, and AI to practical challenges — including financial risk and fraud prevention. I value ownership, clear communication, continuous learning, and solutions that can be maintained and measured in real environments.',
  ],
  email: 'kawsarshojib068@gmail.com',
};

// Contact form → Google Sheets. Paste your Apps Script Web App URL here
// (see google-apps-script/contact-form.gs). Left empty, the form falls back to opening the visitor's email app.
export const contactForm = {
  endpoint: 'https://script.google.com/macros/s/AKfycbyMkfVNOz2IImpa9xtWNqsF40ewF3cesS2YRqyUMSeplkuzWxiEQ6Z_LKl1in1BpXYBtw/exec',
};

export const socials = [
  { label: 'GitHub', url: 'https://github.com/shojib068' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/kawsarahmedshojib/' },
  { label: 'Kaggle', url: 'https://www.kaggle.com/kawsarshojib' },
  { label: 'LeetCode', url: 'https://leetcode.com/KA_Shojib' },
  { label: 'HackerRank', url: 'https://www.hackerrank.com/kawsar_shojib' },
];

// "Worked with" row under the hero buttons
export const workedWith = ['YetFix Limited', 'Nazihar IT Solutions', 'Janata Bank PLC', 'University of Chittagong'];

export const glance = [
  { value: 3.68, decimals: 2, suffix: ' / 4.00', label: 'CGPA · CSE, University of Chittagong' },
  { value: 2, suffix: '+', label: 'Companies in software engineering' },
  { value: 1, prefix: '#', label: 'Hackathon — CU Science Carnival 4.0' },
  { value: 15.05, decimals: 2, suffix: '%', label: 'Estimated energy saved in thesis study' },
];

export const highlights = [
  { title: 'Education', text: 'B.Sc. in Computer Science and Engineering, University of Chittagong' },
  { title: 'Industry', text: 'Software engineering and core banking systems' },
  { title: 'Core domain', text: 'Enterprise software, banking workflows, databases, and data' },
  { title: 'Research', text: 'Data science, machine learning, AI, and energy-aware systems' },
  { title: 'Leadership', text: 'Hackathon champion, student organizations, university event volunteering' },
];

export const experience = [
  {
    role: 'App Developer — Technology Department',
    company: 'YetFix Limited',
    period: 'Oct 2026 — Present',
    current: true,
    summary:
      'Working in a software development environment, contributing to technology and application-development work.',
    points: [],
    tags: ['App Development', 'iOS', 'Android'],
  },
  {
    role: 'Software Engineer',
    company: 'Nazihar IT Solutions Limited',
    period: 'Oct 2025 — Sep 2026',
    summary:
      'Worked on enterprise banking software for Janata Bank PLC, with exposure to Temenos T24 and core banking workflows.',
    points: [
      'Developed the Locker module independently, taking ownership of its implementation.',
      'Collaborated across General Banking, Cash Remittance, and Loan-related teams/modules.',
      'Worked in a core banking environment involving business processes, databases, and enterprise software.',
      'Delivered a two-day introduction to Core Banking Systems (CBS) and Temenos T24 for interns.',
    ],
    tags: ['Temenos T24', 'Core Banking', 'Databases', 'Enterprise Software'],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Nazihar IT Solutions Limited',
    period: '4-month internship',
    summary:
      'Gained practical exposure to core banking software and enterprise development workflows.',
    points: [
      'Built familiarity with banking operations and software delivery.',
      'Learned how business requirements translate into technical implementation.',
    ],
    tags: ['CBS', 'Banking Operations'],
  },
];

export const thesis = {
  label: 'Undergraduate Thesis · University of Chittagong · Sep 2024 — Sep 2025',
  title:
    'Enhancing Energy Efficiency in Enterprise Wireless Networks: A Calendar-Based Power Scheduling Approach for Cisco Catalyst 9800 WLC',
  supervisor: 'Prof. Dr. Atiqur Rahman',
  summary:
    'Investigated a calendar-based scheduling approach for wireless access points managed through a Cisco Catalyst 9800 Wireless LAN Controller, aiming to reduce energy use during lower-demand periods.',
  stats: [
    { value: 100, label: 'Access points evaluated' },
    { value: 2334.7, decimals: 1, suffix: ' kWh', label: 'Estimated energy saved' },
    { value: 11672.5, decimals: 2, prefix: '৳', label: 'Estimated cost saved (BDT 5/kWh)' },
    { value: 1384.47, decimals: 2, suffix: ' kg', label: 'Estimated CO₂ reduction' },
  ],
  note: 'Estimates based on the study’s assumptions: 17.7 W active / 14 W sleep per AP, 0.593 kg CO₂/kWh.',
};

export const projects = [
  {
    title: 'Circle Network — Customer App',
    type: 'Flutter Mobile App',
    status: 'Built',
    description:
      'A customer-facing mobile app for network-service customers, focused on responsive layouts and a consistent experience across device sizes.',
    features: [
      'Splash & login flow',
      'Home with service status and quick actions',
      'Pay-bill with package & billing-period selection',
      'Complaint submission and history',
      'Transaction history & bottom navigation',
      'Glass-inspired UI with reusable widgets',
    ],
    tags: ['Flutter', 'Dart', 'Responsive UI'],
    cover: '/projects/circle-network/screen-1.svg',
    // Replace these with your own files in public/projects/circle-network/
    media: [
      { type: 'video', src: '/projects/demo-video.mp4', poster: '/projects/circle-network/video-poster.svg', alt: 'Demo video' },
      { type: 'image', src: '/projects/circle-network/screen-1.svg', alt: 'Login screen' },
      { type: 'image', src: '/projects/circle-network/screen-2.svg', alt: 'Home screen' },
      { type: 'image', src: '/projects/circle-network/screen-3.svg', alt: 'Pay bill screen' },
    ],
  },
  {
    title: 'Live TV Streaming App',
    type: 'Flutter · HLS / M3U8',
    status: 'In Progress',
    description:
      'A mobile live-TV streaming app for Android and iOS, integrating a private streaming API and HLS/M3U8 playlists.',
    features: [
      'HLS playback and stream compatibility',
      'API integration and channel-list experience',
      'Reliability and performance at scale',
      'Load distribution and operational monitoring',
    ],
    tags: ['Flutter', 'HLS', 'API Integration'],
    cover: '/projects/live-tv/screen-1.svg',
    // Replace these with your own files in public/projects/live-tv/
    media: [
      { type: 'video', src: '/projects/demo-video.mp4', poster: '/projects/live-tv/video-poster.svg', alt: 'Demo video' },
      { type: 'image', src: '/projects/live-tv/screen-1.svg', alt: 'Channel list' },
      { type: 'image', src: '/projects/live-tv/screen-2.svg', alt: 'Player' },
      { type: 'image', src: '/projects/live-tv/screen-3.svg', alt: 'Categories' },
    ],
  },
  {
    title: 'Temenos T24 R22 — Locker Module',
    type: 'Core Banking · R9 → R22 Migration',
    status: 'Delivered',
    description:
      'Developed the Locker module for Janata Bank PLC as part of a Temenos T24 R9 → R22 migration — core banking modernization for enterprise banking.',
    features: [
      'Locker account management',
      'Automated charge generation',
      'Insurance processing',
      'Validation logic',
      'Background services',
      'ETD, VERSION, ENQUIRY & MENU development',
      'Java and InfoBasic routines',
      'Service and record lifecycle',
    ],
    tags: ['Temenos T24', 'Java', 'TAFJ', 'InfoBasic', 'OFS'],
    cover: '/projects/temenos-t24/1784798404763.jpeg',
    // Replace or add files in public/projects/temenos-t24/
    media: [
      { type: 'image', src: '/projects/temenos-t24/1784798404763.jpeg', alt: 'Locker module project overview' },
    ],
  },
];

export const skills = [
  {
    group: 'Software Engineering',
    items: ['Java', 'Python', 'SQL & Relational Databases', 'Data Structures & Algorithms', 'Debugging'],
  },
  {
    group: 'Banking & Enterprise',
    items: ['Temenos T24', 'Core Banking Systems', 'Banking Workflows', 'Enterprise Delivery'],
  },
  {
    group: 'Mobile Development',
    items: ['Flutter', 'Dart', 'Responsive Mobile UI', 'iOS & Android'],
  },
  {
    group: 'Data, AI & ML',
    items: ['Data Analysis', 'Visualization', 'ML Fundamentals', 'NLP & LLMs', 'RAG', 'Explainable AI'],
  },
  {
    group: 'Tools & Workflow',
    items: ['Git & GitHub', 'Kaggle', 'Linux / CLI'],
  },
];

export const education = {
  degree: 'B.Sc. Engineering in Computer Science and Engineering',
  school: 'University of Chittagong, Bangladesh',
  period: 'Jan 2020 — Nov 2025',
  cgpa: '3.68 / 4.00',
  summary:
    'Academic foundation in computer science, software engineering, algorithms, databases, computer networks, and related computing disciplines.',
};

export const awards = [
  {
    title: 'Hackathon Champion',
    icon: '🏆',
    org: 'Chittagong University Science Carnival 4.0',
    year: '2025',
    text: 'Member of the winning team in a competition involving 12 teams.',
  },
  {
    title: 'Government Merit Stipend',
    icon: '🎖️',
    org: 'Government of Bangladesh',
    year: 'SSC',
    text: 'General merit recognition; merit position 84.',
  },
  {
    title: 'Grameen Bank Merit Stipend',
    icon: '🎓',
    org: 'Grameen Bank',
    year: '',
    text: 'Merit-based academic stipend.',
  },
  {
    title: 'Inter-Hall Shot Put Champion',
    icon: '🥇',
    org: 'University of Chittagong',
    year: '2024',
    text: 'First place in the inter-hall athletics competition.',
  },
];

// Social services & community work. Images are placeholders —
// drop your photos into public/social/ and update the `image` paths.
export const socialServices = [
  {
    title: 'Convocation Volunteer',
    org: 'University of Chittagong 5th Convocation',
    period: '',
    text: 'Volunteered to support one of the university’s largest events.',
    image: '/social/service-1.svg',
  },
  {
    title: 'Cadet',
    org: 'Bangladesh National Cadet Corps (BNCC)',
    period: '',
    text: 'Served as a BNCC cadet, building discipline, teamwork and service to the community.',
    image: '/social/service-2.svg',
  },
  {
    title: 'Website Secretary',
    org: 'CUSS — University of Chittagong',
    period: '2024 — 2025',
    text: 'Managed the society’s website after serving as a general member from 2021 to 2024.',
    image: '/social/service-3.svg',
  },
  {
    title: 'CBS & T24 Trainer',
    org: 'Nazihar IT Solutions',
    period: '',
    text: 'Delivered a two-day introduction to Core Banking Systems and Temenos T24 for interns.',
    image: '/social/service-4.svg',
  },
];

export const certifications = [
  { title: 'Python Certificate', org: 'Data Solution 360' },
  { title: 'Data & ML Learning Pathway', org: 'DataCamp' },
];

export const focus = [
  'Build and document end-to-end data science projects with reproducible code and honest evaluation.',
  'Strengthen Python, SQL, statistics, machine learning, and data visualization.',
  'Explore responsible fraud-risk analytics using synthetic or authorized datasets.',
  'Publish clear technical case studies with methodology, limitations, and results.',
  'Continue developing reliable, responsive mobile applications.',
];

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'social-services', label: 'Social Services' },
  { id: 'contact', label: 'Contact' },
];
