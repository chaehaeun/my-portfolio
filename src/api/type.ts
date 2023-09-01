import { DocumentData } from 'firebase/firestore'

export interface AboutDataType extends DocumentData {
  id: number
  name: string
  date: string
  detail: string[]
  tag?: string
  stackName?: string
  [key: string]: any
}

export interface ProjectDataType extends DocumentData {
  projects: string
  date: string
  description: string
  techStack: string[]
  tag: string[]
  github?: string
  notion?: string
  imgURL: string
  deploy?: string
}
