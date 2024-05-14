'use server'
import { revalidatePath } from "next/cache"
import prisma from "./db"


export const getAllTasks = async ( ) => {
    return await prisma.task.findMany({
        orderBy : {
            createdAt : 'desc'
        }
    })
}

export const createTask = async (formData) => {
    const content = await formData.get('content');
     await prisma.task.create({
        data : {
            content 
        }
    })
    revalidatePath('/tasks')
}

export const deleteTask = async (formData) => {
    const id = await formData.get('id');
    console.log(id);
    await prisma.task.delete({
        where : {
            id
        }
    });
    revalidatePath('/tasks')
}