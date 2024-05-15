'use server'
import { revalidatePath } from "next/cache"
import prisma from "./db"
import { redirect } from "next/navigation"
import { z } from 'zod';



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
export const createTaskCustom = async (prevState,formData) => {
    const content = await formData.get('content');
    const Task = z.object({
        content : z.string().min(5)
    })
    try {
        Task.parse({content})
         await prisma.task.create({
            data : {
                content 
            }
        })
        revalidatePath('/tasks');
        return { message : 'success' }
        
    } catch (error) {
        return { message : 'error' }
        
    }
}

export const deleteTask = async (prevState,formData) => {
    const id = await formData.get('id');
//   await new Promise((resolve)=> setTimeout(resolve,1000))
console.log(prevState,"Prev");

    try {
        await prisma.task.delete({
            where : {
                id
            }
        });
        revalidatePath('/tasks');
        console.log(prevState,"Prev");
        return { message : 'success' }
    } catch (error) {
        return { message : 'error' }
    }
}

export const editTask = async (formData) => {
    const content = await formData.get('content');
    const completed = await formData.get('completed');
    const id = await formData.get('id');
    await prisma.task.update({
        where : {
            id
        },
        data : {
            content ,
            completed : completed==='on'?true:false
        }
    });
    redirect('/tasks')

}