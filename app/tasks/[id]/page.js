import prisma from '@/utils/db';
import React from 'react'

const page = async ({params}) => {
    const task = await prisma.task.findUnique({
        where : {
            id : params.id
        }
    })
  return (
    <div>page</div>
  )
}

export default page