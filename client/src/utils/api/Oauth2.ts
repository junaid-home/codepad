import api from './httpService'

export async function getGoogleOauthUrl() {
  const response = await api.get('/Oauth2/get/url')

  if (response.data.status === 'Success') return response.data
  else return response.data.message
}

export async function loginWithGoogle(code: string) {
  const response = await api.post('/Oauth2/login', {code: code})

  if (response.data.status === 'Success') return response.data
  else return response.data.message
}
