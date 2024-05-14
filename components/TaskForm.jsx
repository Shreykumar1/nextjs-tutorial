import { revalidatePath } from 'next/cache';
import React from 'react'

const createTask = async (formData) => {
    'use server'
    const content = await formData.get('content');
    await prisma.task.create({
        data : {
          content : content
        }
      });
    console.log(content);
    revalidatePath('/tasks')
}

const TaskForm = () => {
  return (
    <form action={createTask}>
      <div className='join w-full'>
        <input
          className='input input-bordered join-item w-full'
          placeholder='Type Here'
          type='text'
          name='content'
          required
        />
        <button type='submit' className='btn join-item btn-primary uppercase'>
          create task
        </button>
      </div>
    </form>
  )
}

export default TaskForm