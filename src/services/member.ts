import axios from 'axios'

const BASE_URL = 'https://blocdao.herokuapp.com/api/member'

const memberAxios = axios.create({ baseURL: BASE_URL })

memberAxios.interceptors.response.use(undefined, (error) => {
  console.error(error)
  return null
})

interface SignUpParam {
  token: string
  nickName: string
  imageUrl: string
  email: string
  phone: string
  profileLink: string
  memberStacks: number[]
}

const signUp = async ({ token, nickName, imageUrl, email, phone, profileLink }: SignUpParam) => {
  await memberAxios.post(
    '/signup',
    { nickName, imageUrl, email, phone, profileLink },
    { headers: { Authorization: `Bearer ${token}` } },
  )
}

export const MemberService = {
  signUp,
}
