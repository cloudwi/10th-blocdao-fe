import axios from 'axios'

const BASE_URL = 'https://blocdao.herokuapp.com/api/members'

const memberAxios = axios.create({ baseURL: BASE_URL })

interface LoginParams {
  token: string
}

const signIn = async ({ token }: LoginParams) => {
  await memberAxios.get('/', { headers: { Authorization: `Bearer ${token}` } })
}

interface SignUpParam {
  token: string
  nickName: string
  imageUrl: string
  email: string
  phone: string
  profileLink: string
  memberStacks: number[]
}

const signUp = async ({ token, nickName, imageUrl, email, phone, profileLink, memberStacks }: SignUpParam) => {
  await memberAxios.post(
    '/',
    { nickName, imageUrl, email, phone, profileLink, memberStacks },
    { headers: { Authorization: `Bearer ${token}` } },
  )
}

export const MemberService = {
  signIn,
  signUp,
}
