import type { SkillGroup } from '../types'

export const skills: SkillGroup[] = [
  { label: 'Languages', icon: '💻', items: ['C++', 'Java', 'Python', 'JavaScript', 'SQL'] },
  { label: 'Frontend', icon: '🎨', items: ['HTML', 'CSS', 'ReactJS', 'NextJS', 'Bootstrap', 'Tailwind CSS'] },
  { label: 'Backend', icon: '⚙️', items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'bcrypt', 'FastAPI'] },
  { label: 'Databases', icon: '🗄️', items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Oracle'] },
  { label: 'Tools', icon: '🛠️', items: ['Git', 'GitHub', 'Postman', 'VS Code'] },
  { label: 'Core CS', icon: '🧠', items: ['Data Structures & Algorithms', 'OOPs', 'DBMS', 'Operating Systems', 'Computer Networks'] },
]