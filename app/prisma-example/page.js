import prisma from "@/utils/db"

const prismaHandlers = async () => {
  await prisma.task.create({
    data : {
      content : 'wake up'
    }
  });
  const allTasks = await prisma.task.findMany({
    orderBy : {
      createdAt : 'desc'
    }
  })
  return allTasks
}

const PrimsaExample = async () => {
  // const tasks = await prismaHandlers();
  const tasks = await prisma.task.findMany();
  return (
    <div>
      <h1>Prisma</h1>
      {tasks.map((task)=>{
        return <h2 className="text-xl py-2" key={task.id}>{task.content}</h2>
      })}
    </div>
  )
}

export default PrimsaExample