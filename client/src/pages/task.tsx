import {NewTask, TaskList} from '../components'
import {Wrapper} from '../components/elements'

function Task() {
  return (
    <Wrapper>
      <NewTask />
      <TaskList />
    </Wrapper>
  )
}

export default Task
