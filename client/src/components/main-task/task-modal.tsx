import React, {useState} from 'react'
import PureModal from 'react-pure-modal'
import {toast, ToastContainer} from 'react-toastify'
import {Button, Input, Loader} from '../elements'
import {ModalWrapper} from './elements'
import {createTask} from '../../utils/api/task'

import 'react-pure-modal/dist/react-pure-modal.min.css'

function Modal({isOpen, onClose}: Props) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({name: '', thumbnailUrl: ''})

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setLoading(true)
    const error = await createTask(data)

    if (error) toast.error(error)

    document.location.assign('/')
  }

  return (
    <ModalWrapper>
      {loading && <Loader />}
      <ToastContainer />
      <PureModal header="new Task" isOpen={isOpen} onClose={onClose}>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Task Name"
            minLength={3}
            maxLength={30}
            value={data.name}
            required
            onChange={e => setData(prev => ({...prev, name: e.target.value}))}
          />
          <Input
            type="url"
            value={data.thumbnailUrl}
            placeholder="Thumbnail Url"
            required
            onChange={e => setData(prev => ({...prev, thumbnailUrl: e.target.value}))}
          />
          <Button
            disabled={loading}
            type="submit"
            modifiers={['w100', 'large', 'whiteText']}
          >
            Create
          </Button>
        </form>
      </PureModal>
    </ModalWrapper>
  )
}

interface Props {
  isOpen: boolean
  onClose: () => void
}

export default Modal
