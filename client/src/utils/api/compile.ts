import httpService from './httpService'
import languageData from '../language-data'

interface Data {
  code: string
  language: string
}

export async function compile(data: Data) {
  const languageInfo = languageData.find(x => x.value === data.language)

  const response = await httpService.post('/compile', {
    content: data.code,
    language: data.language,
    versionIndex: languageInfo?.versionIndex,
  })

  if (response.data.status === 'Success') {
    return response.data.results
  } else {
    return response.data.message
  }
}
