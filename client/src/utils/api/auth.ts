import httpService from './httpService'

interface LoginCredentials {
  id: string
  password: string
}

interface SignupCredentials {
  firstName: string
  lastName: string
  username: string
  email: string
  password: string
}

export async function login(data: LoginCredentials) {
  const response = await httpService.post('/user/login', data)

  if (response.data.status === 'Success') {
    return response.data.user
  } else {
    return response.data.message
  }
}

export async function logout() {
  const response = await httpService.get('/user/logout')

  if (response.data.status !== 'Success') {
    return response.data.message
  }
}

export async function signup(data: SignupCredentials) {
  const response = await httpService.post('/user/create', data)

  if (response.data.status === 'Success') {
    return response.data.user
  } else {
    if (
      response.data.message.includes('E11000') &&
      response.data.message.includes('username')
    )
      return 'Username Already Taken, Plase try another one.'

    if (
      response.data.message.includes('E11000') &&
      response.data.message.includes('email')
    )
      return 'Email Already Exists, Plase login.'

    return response.data.message
  }
}
