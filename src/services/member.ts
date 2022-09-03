import axios from 'axios'

const BASE_URL = 'https://blocdao.herokuapp.com/api/member'

const memberAxios = axios.create({ baseURL: BASE_URL })

interface SignUpParam {
  token: string
  nickName: string
  imageUrl: string
  email: string
  phone: string
  profileLink: string
}

const signUp = async ({ token, nickName, imageUrl, email, phone, profileLink }: SignUpParam) => {
  try {
    await memberAxios.post(
      '/signup',
      { nickName, imageUrl, email, phone, profileLink },
      { headers: { Authorization: `Bearer ${token}` } },
    )
  } catch (error) {
    console.error(error)
  }
}

export const MemberService = {
  signUp,
}
