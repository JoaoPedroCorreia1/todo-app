import AddTodo from "@/components/todos/AddTodo";
import Todo from "@/components/todos/Todo";
import { todoProps } from "@/types";
import { prisma } from "@/utils/prisma";
import { Key } from "react";

async function getData() {
  const data = await prisma.todo.findMany({
    select: {
      title: true,
      id: true,
      isCompleted: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

export default async function Home() {
  const data = await getData();
  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <h2 className="mb-10 text-4xl font-extrabold uppercase">Todo App</h2>
      
      <div className="flex justify-center flex-col items-center">
        <AddTodo />

        <div className="flex flex-col gap-5 items-center justify-center mt-10 w-screen">
          {data.map((todo: todoProps, id: Key | null | undefined) => (
            <div className="w-full" key={id}>
              <Todo todo={todo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}