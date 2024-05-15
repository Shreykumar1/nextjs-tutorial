'use client'
import { deleteTask } from '@/utils/actions'
import { useEffect } from 'react'
import { useFormStatus } from 'react-dom'
import { useFormState } from 'react-dom'
import toast from 'react-hot-toast'

const DeleteBtn = ()=> {
  const {pending} = useFormStatus();
  return  <button className='btn btn-error btn-xs' disabled={pending}>{pending?'please wait':'delete'}</button>
} 

const initialState = {
  message : null
}

const DeleteForm = ({id}) => {
  const [state,deleteAction] = useFormState(deleteTask,initialState);
  console.log(state);
  useEffect(()=>{
    if(state.message === 'error'){
      toast.error('there was an error')
      return
    }
    else if(state.message ){
       toast.success('task deleted')
       return
    }
  },[state])
  return (
    <form action={deleteAction}>
      <input type='hidden' name='id' value={id} />
      <DeleteBtn />
    </form>
  )
}

export default DeleteForm