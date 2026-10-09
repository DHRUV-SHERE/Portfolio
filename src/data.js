import AgroSence from './assets/Home page.png'

export const profile = {
  name: 'Dhruv Shere',
  role: 'Software Engineer',
  company: 'Lumos Logic India LLP',
  location: 'Ahmedabad, India',
  email: 'sheredhruv@gmail.com',
  phone: '+91 9316846548',
  linkedin: 'https://www.linkedin.com/in/dhruv-shere/',
  github: 'https://github.com/DHRUV-SHERE',
  portfolio: 'https://portfolio-dhruvshere.vercel.app/',
}

export const stats = [
  { value: 99, suffix: '%+', label: 'Uptime across cloud deployments' },
  { value: 25, suffix: '+', label: 'Products and sites shipped' },
  { value: 6, suffix: '', label: 'Engineers led at Smart India Hackathon 2024' },
  { value: 3, suffix: '', label: 'Clouds deployed to: GCP, Firebase, Vercel' },
]

/* Lumos Logic products. `flow` drives the little architecture diagram. */
export const companyWork = [
  {
    id: 'hrms-web', title: 'HRMS Web', kind: 'Leave, attendance & HR dashboard',
    blurb: 'A production HR platform: leave tracking, manager approvals, balances, team calendar and an admin dashboard, with support for biometric attendance data. Built solo from concept to deployment.',
    flow: ['Employee', 'React app', 'Express API', 'MongoDB'],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'Docker'],
    links: [{ label: 'Live product', url: 'https://hrms.lumoslogic.com/' }], hue: 'orange',
  },
  {
    id: 'hrms-app', title: 'HRMS App', kind: 'Mobile companion for HRMS',
    blurb: 'The HRMS in your pocket: a React Native app with sign-in, tabbed employee views and an admin area, sharing the same backend as the web product.',
    flow: ['Mobile app', 'Auth', 'HRMS API', 'Data'],
    stack: ['Expo', 'React Native', 'TypeScript'], hue: 'blue',
  },
  {
    id: 'devtracker', title: 'DevTracker', kind: 'QA & bug management',
    blurb: 'A QA and developer tracking tool: bug lifecycle, sprint management, task assignment and progress reporting for dev and QA teams. Built solo.',
    flow: ['Bug report', 'Triage', 'Sprint board', 'Fix & verify'],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'JWT'],
    links: [{ label: 'Live product', url: 'https://devtrackrbylumos.web.app/' }], hue: 'lime',
  },
  {
    id: 'docuflow', title: 'DocuFlow AI', kind: 'AI document automation',
    blurb: 'Describe a deal in plain language and receive a structured quotation, invoice, SOW or NDA. Nine document types, version history, share links and PDFs rendered server-side. Built solo.',
    flow: ['Plain-language brief', 'FastAPI + Gemini', 'MongoDB', 'Puppeteer PDF'],
    stack: ['React', 'Express', 'FastAPI', 'MongoDB', 'Cloudinary'],
    links: [{ label: 'Live product', url: 'https://aidocs-lumoslogic.web.app/' }], hue: 'orange',
  },
  {
    id: 'recruitx', title: 'RecruitX', kind: 'AI recruitment platform',
    blurb: 'Close open roles faster with AI: intelligent candidate matching, job posting management and HR workflow automation in one hiring platform.',
    flow: ['Job posted', 'AI matching', 'Shortlist', 'Hire'],
    stack: ['React', 'Node.js', 'LLM', 'Firebase'],
    links: [{ label: 'Live product', url: 'https://recruitx.web.app/' }], hue: 'blue',
  },
  {
    id: 'recruitx-crm', title: 'RecruitX CRM', kind: 'AI calling & interview taker',
    blurb: 'A recruiting CRM whose AI voice agent phones candidates, conducts the screening interview and writes up the result, so recruiters review outcomes instead of making calls.',
    flow: ['Candidate list', 'AI voice call', 'Interview', 'Scored report'],
    stack: ['Next.js', 'Python', 'Voice AI', 'Convex', 'Firebase'],
    links: [{ label: 'Live product', url: 'https://crm.recruitx-ai.com/' }], hue: 'blue',
  },
  {
    id: 'recruitx-meet', title: 'RecruitX Meet', kind: 'AI meeting interviewer',
    blurb: 'A meeting bot that joins video interviews, runs the conversation from a carefully written system prompt and produces a capability report on the candidate.',
    flow: ['Meeting', 'Bot server', 'LLM', 'Capability report'],
    stack: ['Node.js', 'LLM', 'Realtime audio', 'Dashboard'],
    links: [{ label: 'Live product', url: 'https://meet.recruitx-ai.com/' }], hue: 'lime',
  },
  {
    id: 'recruitflow', title: 'RecruitFlow', kind: 'Job distribution & applicant sync',
    blurb: 'Pushes one job out to many channels and pulls every applicant back into a single pipeline, so recruiters stop copy-pasting between boards.',
    flow: ['Recruiter', 'Next.js app', 'Job channels', 'Applicant sync'],
    stack: ['Next.js', 'Firebase App Hosting', 'Node.js'],
    links: [{ label: 'Live product', url: 'https://flow.recruitx-ai.com/' }], hue: 'lime',
  },
  {
    id: 'chartbylumos', title: 'ChartByLumos', kind: 'AI data visualisation',
    blurb: 'Drop in raw data and get cleaned, profiled and charted output. Gemini picks the visualisation, with heuristic rules as an offline fallback.',
    flow: ['Upload', 'Profile & clean', 'Gemini + fallback', 'ECharts'],
    stack: ['React', 'TypeScript', 'ECharts', 'Convex', 'Firebase Functions'],
    links: [{ label: 'Live product', url: 'https://chartbylumos.web.app' }], hue: 'orange',
  },
]

/* Client and company websites shipped at Lumos Logic. */
export const clientSites = [
  { id: 'lumoslogic', title: 'Lumos Logic', kind: 'Company website', year: '2026', blurb: 'Official site for Lumos Logic: services, portfolio, team and inquiries. SEO and Core Web Vitals tuned.', stack: ['React', 'Tailwind', 'Firebase'], links: [{ label: 'Visit', url: 'https://lumoslogic.com/' }] },
  { id: 'truholidays', title: 'TruHolidays', kind: 'Travel platform', year: '2026', blurb: 'Travel booking site with destination browsing, holiday packages and a mobile-first UI.', stack: ['React', 'Tailwind', 'Firebase'], links: [{ label: 'Visit', url: 'https://truholidaysv3.web.app/' }] },
  { id: 'washcure', title: 'WashCure', kind: 'Laundry & dry cleaning', year: '2026', blurb: 'Service site for a Gujarat laundry brand: pricing, garment care, express options and online inquiries.', stack: ['React', 'Tailwind', 'Firebase'], links: [{ label: 'Visit', url: 'https://washcure.in/' }] },
  { id: 'sglite', title: 'Shree Ganesh Polymers', kind: 'Manufacturer website', year: '2026', blurb: 'Catalog and capability site for a polycarbonate sheet manufacturer, with a client inquiry system.', stack: ['React', 'Tailwind', 'Firebase'], links: [{ label: 'Visit', url: 'https://www.sglite.net/' }] },
  { id: 'orvix', title: 'Orvix Digital', kind: 'Marketing agency', year: '2026', blurb: 'Agency site with service showcase, portfolio and lead-generation forms, built for performance and SEO.', stack: ['React', 'Tailwind', 'Firebase'], links: [{ label: 'Visit', url: 'https://orvix-e3c9e.web.app/' }] },
]

/* Personal and academic builds. */
export const bigBuilds = [
  { id: 'connectvista', title: 'ConnectVista', year: '2025–26', kind: 'Service marketplace', blurb: 'Customers meet verified providers through booking, real-time chat, ratings and subscriptions. JWT auth and RBAC for customers, providers and admins.', stack: ['React (Vite)', 'Node.js', 'MongoDB', 'Socket.io', 'Tailwind'], links: [{ label: 'GitHub', url: 'https://github.com/DHRUV-SHERE/ConnectVista' }] },
  { id: 'pashumitra', title: 'PashuMitra', year: '2025', kind: 'Veterinary healthcare', blurb: 'Farmers, vets, medical stores and transporters on one platform: consultations, medicine orders and transport requests with live notifications.', stack: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Tailwind'], links: [{ label: 'GitHub', url: 'https://github.com/ProjectSGH/PashuMitra' }] },
  { id: 'agrosense', title: 'AgroSense', year: '2025', kind: 'Smart agriculture', blurb: 'A farmer-to-buyer marketplace with no middlemen, plus an AI chatbot for farming help and government schemes.', stack: ['MERN', 'Bootstrap', 'Cloudinary', 'MongoDB Atlas'], image: AgroSence, links: [{ label: 'Live', url: 'https://agrosence.vercel.app/' }, { label: 'GitHub', url: 'https://github.com/AgroSence/AgroSence' }] },
  { id: 'promptstudio', title: 'PromptStudio', year: '2024–now', kind: 'AI prompt optimiser', blurb: 'Generates, optimises and templates prompts for multiple AI tools, on a responsive component-based interface.', stack: ['React', 'Node.js', 'Tailwind'], links: [{ label: 'Live', url: 'https://thepromptstudio.vercel.app/' }, { label: 'GitHub', url: 'https://github.com/DHRUV-SHERE/PromptStudio' }] },
]

export const smallBuilds = [
  // Old 2024 builds removed from the portfolio.
  // { id: 'aryapath', title: 'AryaPath', year: 'Coming', kind: 'In planning', blurb: 'A tourism platform for international travellers exploring India: itineraries, cultural insights, local guides, maps and payments.', stack: ['MERN', 'Maps API', 'Socket.io', 'Payments'], links: [{ label: 'GitHub', url: 'https://github.com/DHRUV-SHERE/AryaPath' }] },
]

export const experience = [
  {
    period: 'Jul 2026 — Now',
    title: 'Software Engineer',
    type: 'Full-time',
    company: 'Lumos Logic India LLP',
    place: 'Ahmedabad',
    current: true,
    points: [
      'Own features end to end on production products, from schema and API to UI and deploy.',
      'Run multi-environment releases on Google Cloud Run, Firebase and Vercel at 99%+ uptime.',
      'Design modular REST backends with JWT auth and role-based access control.',
      'Lead Core Web Vitals and technical SEO work that cuts load time and lifts search visibility.',
    ],
  },
  {
    period: 'Jan — Jun 2026',
    title: 'Software Development Intern',
    type: 'Internship',
    company: 'Lumos Logic India LLP',
    place: 'Ahmedabad',
    points: [
      'Delivered production web apps in React, Node.js, Express and MongoDB across the full SDLC.',
      'Built scalable APIs with JWT auth and RBAC, and shipped to multiple cloud environments.',
      'Worked with designers and stakeholders to ship business-critical features on schedule.',
      'Converted from intern to full-time engineer after six months.',
    ],
  },
]

export const skillLogos = [
  ['React', 'react'], ['Next.js', 'next'], ['TypeScript', 'typescript'], ['JavaScript', 'javascript'],
  ['Node.js', 'node'], ['Express', 'express'], ['Socket.io', 'socketio'], ['MongoDB', 'mongodb'],
  ['PostgreSQL', 'postgree'], ['MySQL', 'mysql'], ['Tailwind', 'tailwindcss'], ['Python', 'python'],
  ['Firebase', 'firebase'], ['Google Cloud Run', 'googlecloudrun'], ['AWS', 'aws'], ['Vercel', 'vercel'],
  ['Cloudinary', 'cloudinary'], ['Git', 'git'], ['Postman', 'postman'], ['Hostinger', 'hostinger'],
]

export const skillGroups = [
  { title: 'Frontend', items: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP & Framer Motion', 'Responsive design'] },
  { title: 'Backend', items: ['Node.js', 'Express.js', 'REST API design', 'JWT & RBAC', 'Socket.io', 'BullMQ queues'] },
  { title: 'Data', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Convex', 'Supabase'] },
  { title: 'Cloud', items: ['Google Cloud Run', 'Firebase', 'AWS (EC2, S3, SES)', 'Vercel', 'Hostinger'] },
  { title: 'Craft', items: ['System design', 'DSA & OOP', 'Core Web Vitals', 'Technical SEO', 'AI integrations', 'Web security'] },
]

export const education = [
  { school: 'U.V. Patel College of Engineering, Ganpat University', degree: 'B.Tech, Information Technology', years: '2023 — 2026', score: '8.30', of: 'CGPA' },
  { school: 'Government Polytechnic College, Ahmedabad', degree: 'Diploma, Information Technology', years: '2020 — 2023', score: '8.19', of: 'CGPA' },
]

export const highlights = [
  { big: 'SIH 24', text: 'Led a 6-member team at Smart India Hackathon 2024.' },
  { big: '5+', text: 'Production full-stack apps built and deployed on GCP, Firebase and Vercel.' },
  { big: 'RT', text: 'Real-time systems on Socket.io: chat, notifications and live workflows.' },
  { big: 'AI', text: 'LLM features shipped in products: chatbots, document and chart generation.' },
]
