'use client'
import { createTaskCustom } from "@/utils/actions"
import { useEffect } from "react"
import { useFormStatus } from  'react-dom'
import { useFormState } from  'react-dom'
import toast from "react-hot-toast"

const SubmitBtn =  () => {
  const {pending} = useFormStatus();
  return   <button type='submit' className='btn join-item btn-primary uppercase' disabled={pending}>
    {pending ? 'please wait...' : 'create task'}
  </button>
}

const initialState = {
  message : null
}

const TaskFormCustom = () => {
  const [state,formAction] = useFormState(createTaskCustom,initialState);
  useEffect(()=>{
    if(state.message === 'error'){
      toast.error('there was an error')
      return
    }
    if(state.message ){
      toast.success('task created')
      return
    }
  },[state])
  return (
    <form action={formAction}>
      {/* {state.message ? <p className="mb-2">{state.message}</p>: null} */}
      <div className='join w-full'>
        <input
          className='input input-bordered join-item w-full'
          placeholder='Type Here'
          type='text'
          name='content'
          required
        />
      <SubmitBtn />
      </div>
    </form>
  )
}

export default TaskFormCustom