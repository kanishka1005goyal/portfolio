export interface SkillGroup {
  label: string
  icon: string
  items: string[]
}

export interface ExperienceItem {
  role: string
  org: string
  dept: string
  duration: string
  points: string[]
}

export interface ProjectItem {
  name: string
  stack: string
  date: string
  link?: string
  points: string[]
}

export interface CertificateItem {
  title: string
  issuer: string
  icon: string
  file: string
}

export interface AboutCard {
  icon: string
  title: string
  body: string
}

export type Theme = 'light' | 'dark'
