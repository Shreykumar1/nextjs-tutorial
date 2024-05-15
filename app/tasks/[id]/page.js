import EditForm from "@/components/EditForm";
import { editTask } from "@/utils/actions";
import prisma from "@/utils/db";
import Link from "next/link";
import React from "react";

// const editTask = async (formData)=>{
//   'use server'
//   const data = await formData.get('edit');
//   const completed = await formData.get('completed');
//   console.log(data,completed);
// }


const page = async ({ params }) => {
  const task = await prisma.task.findUnique({
    where: {
      id: params.id,
    },
  });

  return (
    <>
    <div className='mb-16'>
      <Link href='/tasks' className='btn btn-accent'>
        Back to Tasks
      </Link>
    </div>
    <EditForm task={task} />
  </>

    // <div>
    //   <Link href='/tasks' className='btn btn-accent mb-16' >BACK TO TASKS</Link>
    //   <form className="max-w-sm px-12 py-12 border-base-300 border rounded-lg" action={editTask}>
    //     <input
    //       className="input input-bordered join-item w-full"
    //       placeholder="Type Here"
    //       type="text"
    //       name="edit"
    //       defaultValue={task.content}
    //       required
    //     />
    //   <input type='hidden' name='id' value={params.id} />
    //     <div className="form-control">
    //       <label className="label cursor-pointer">
    //         <span className="label-text">completed</span>
    //         <input type="checkbox" name="completed"  className="checkbox checkbox-sm my-4 checkbox-primary" />
    //       </label>
    //     </div>
    //     <button className="btn btn-primary btn-sm btn-block">EDIT</button>
    //   </form>
    // </div>
  );
};

export default page;
