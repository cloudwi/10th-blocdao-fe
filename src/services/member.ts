import axios from 'axios'

const BASE_URL = 'https://blocdao.herokuapp.com/api/member'

const memberAxios = axios.create({ baseURL: BASE_URL })

interface LoginParams {
  token: string
}

const signIn = async ({ token }: LoginParams) => {
  await memberAxios.get('/login', { headers: { Authorization: `Bearer ${token}` } })
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
    '/signup',
    { nickName, imageUrl, email, phone, profileLink, memberStacks },
    { headers: { Authorization: `Bearer ${token}` } },
  )
}

export const MemberService = {
  signIn,
  signUp,
}
