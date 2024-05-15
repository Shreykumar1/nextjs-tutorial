'use client'
import { createTaskCustom } from "@/utils/actions"
import { useFormStatus } from  'react-dom'
import { useFormState } from  'react-dom'
import { z } from "zod"

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
  const [state,formAction] = useFormState(createTaskCustom,initialState)
  return (
    <form action={formAction}>
      {state.message ? <p className="mb-2">{state.message}</p>: null}
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