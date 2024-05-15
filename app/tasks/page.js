import TaskForm from '@/components/TaskForm'
import TaskFormCustom from '@/components/TaskFormCustom'
import TaskList from '@/components/TaskList'
import React from 'react'

const TasksPage = () => {
  return (
    <div className='max-w-lg'>
      <TaskFormCustom />
      <TaskList />
    </div>
  )
}

export default TasksPage