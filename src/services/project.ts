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

const getList = async (): Promise<Project[]> => {
  try {
    const response = await projectAxios.get<Pageable<Project>>('/')
    return response.data.content
  } catch (error) {
    console.error(error)
    return []
  }
}

export const ProjectService = {
  getList,
}
