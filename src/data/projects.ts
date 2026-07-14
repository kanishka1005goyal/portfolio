import type { ProjectItem } from '../types'

export const projects: ProjectItem[] = [
 {
  name: 'PathFinder AI',
  stack: 'React.js, Node.js, Express.js, MongoDB, FastAPI, Groq',
  date: '2026',
  link: 'https://resume-analyser10.netlify.app/',
  points: [
    'AI career-coaching platform: resume scoring, skill-gap analysis, learning-path suggestions and a mock interview chat mode.',
    "Split architecture — Express API + a FastAPI microservice calling Groq's Llama 3.3 for reasoning-heavy features.",
    'Resume score history, PDF report export and multi-resume comparison on the dashboard.',
  ],
},

  {
    name: 'Secure Eye',
    stack: 'Python, Computer Vision',
    date: 'Aug 2024',
    points: [
      'AI-powered campus surveillance system for real-time detection of intruders, fire and crowd anomalies.',
      'Built emergency alert and live monitoring features.',
    ],
  },
  {
    name: 'E-Commerce Platform',
    stack: 'HTML, CSS, JavaScript, Node.js, Express.js, MongoDB',
    date: 'Jan 2025',
    points: [
      'Full-stack shopping platform with secure user authentication.',
      'Product management, cart and an admin dashboard backed by REST APIs.',
    ],
  },
  {
    name: 'Heval',
    stack: 'React.js, Node.js, Express.js, MongoDB',
    date: 'Feb 2025',
    points: [
      'Human translation evaluation system with file upload and review workflows.',
      'Admin dashboard for evaluator management and task tracking.',
    ],
  },
  {
    name: 'Fake News Detection',
    stack: 'Python, NLP, TF-IDF',
    date: '2025',
    points: [
      'Machine-learning classifier that flags news articles as fake or real using TF-IDF features.',
    ],
  },
]