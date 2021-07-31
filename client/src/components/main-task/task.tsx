import {Thumbnail, Link} from './elements'
import {H3} from '../elements'
import {Data} from './task-list'

function Task({data}: {data: Data}) {
  return (
    <Link to={`/task/${data._id}`}>
      <Thumbnail width="100%" src={data.thumbnailUrl} alt={data.name} effect="opacity" />
      <H3>{data.name}</H3>
    </Link>
  )
}

export default Task
