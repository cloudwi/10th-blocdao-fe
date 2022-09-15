import axios from 'axios'

const BASE_URL = 'https://blocdao.herokuapp.com/api/members'

const memberAxios = axios.create({ baseURL: BASE_URL })

interface LoginParams {
  token: string
}

const signIn = async ({ token }: LoginParams) => {
  await memberAxios.get('', { headers: { Authorization: `Bearer ${token}` } })
}

interface SignUpParam {
  token: string
  nickName: string
  imageUrl: string
  email: string
  phone: string
  profileLink: string
  stacks: string[]
}

const signUp = async ({ token, nickName, imageUrl, email, phone, profileLink, stacks }: SignUpParam) => {
  await memberAxios.post(
    '',
    { nickName, imageUrl, email, phone, profileLink, stacks },
    { headers: { Authorization: `Bearer ${token}` } },
  )
}

export const MemberService = {
  signIn,
  signUp,
}
