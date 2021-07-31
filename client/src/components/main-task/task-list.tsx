import {useState, useEffect, Fragment} from 'react'
import {toast, ToastContainer} from 'react-toastify'
import {TaskContainer, Title} from './elements'
import {Loader} from '../elements'
import Task from './task'
import {getAllUserTasks} from '../../utils/api/task'

import 'react-lazy-load-image-component/src/effects/opacity.css'

function TaskList() {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<Data[]>()

  useEffect(() => {
    setLoading(true)
    getAllUserTasks()
      .then(response => {
        if (typeof response === 'string') {
          toast.error(response)
          return
        }

        setData(response)
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <Fragment>
      <ToastContainer />
      {loading && <Loader />}
      <Title>Existing Tasks.</Title>
      <TaskContainer>
        {data && data.map(task => <Task data={task} key={task._id} />)}
      </TaskContainer>
    </Fragment>
  )
}

export interface Data {
  _id: string
  name: string
  thumbnailUrl: string
  content: string
  owner: string
  language: string
}

export default TaskList
