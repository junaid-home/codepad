import httpService from './httpService'

interface Task {
  name: string
  thumbnailUrl: string
}

interface UpdateData {
  content: string
  id: string
  language: string
}

export async function createTask(data: Task) {
  const response = await httpService.post('/task/create', {
    ...data,
    owner: JSON.parse(localStorage.getItem('user') as string)._id,
  })

  if (response.data.status === 'Success') {
    return null
  } else {
    return response.data.message
  }
}

export async function getAllUserTasks() {
  const response = await httpService.get(
    `/task/all/${JSON.parse(localStorage.getItem('user') as string)._id}`,
  )

  if (response.data.status === 'Success') {
    return response.data.tasks
  } else {
    return response.data.message
  }
}

export async function updateTaskCode(data: UpdateData) {
  const response = await httpService.patch(`/task/update/${data.id}`, {
    content: data.content,
    language: data.language,
  })

  if (response.data.status === 'Success') {
    return null
  } else {
    return response.data.message
  }
}

export async function getSingleTask(id: string) {
  const response = await httpService.get(`/task/get/${id}`)

  if (response.data.status === 'Success') {
    return response.data.task
  } else {
    return response.data.message
  }
}
