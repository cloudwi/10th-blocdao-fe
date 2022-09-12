import axios from 'axios'

const BASE_URL = 'https://blocdao.herokuapp.com/api/v1/projects'

const projectAxios = axios.create({ baseURL: BASE_URL })

export interface Pageable<T> {
  content: T[]
  totalPages: number
  totalElements: number
  last: boolean
  size: number
  number: number
  sort: { empty: boolean; sorted: boolean; unsorted: boolean }
  numberOfElements: number
  first: boolean
  empty: boolean
}

// @sort-keys
export interface Project {
  address: string
  contact: string
  content: string
  createUid: string
  expectedStartDate: string
  id: number
  isOnline: boolean
  isRecruitment: boolean
  period: number
  projectStacks: string[]
  recruitmentNumber: number
  recruitmentType: string
  title: string
  view: number
}

// @sort-keys
export interface ProjectWriteRequest {
  address: string
  contact: string
  content: string
  createUid: string
  expectedStartDate: string
  isOnline: boolean
  isRecruitment: boolean
  period: number
  recruitmentNumber: number
  recruitmentType: 'STUDY' | 'PROJECT'
  stacks: Array<'FRONT' | 'BACK' | 'MOBILE' | 'ETC'>
  title: string
}

const getList = async (): Promise<Project[]> => {
  try {
    const response = await projectAxios.get<Pageable<Project>>('/')
    return response.data.content
  } catch (error) {
    console.error(error)
    return []
  }
}

const add = async (project: ProjectWriteRequest, token: string): Promise<boolean> => {
  try {
    const response = await projectAxios.post('/', project, {
      headers: { Authorization: `Bearer ${token}` },
    })
    console.log(response)
    return true
  } catch (error) {
    console.error(error)
    return false
  }
}

export const ProjectService = {
  getList,
  add,
}
