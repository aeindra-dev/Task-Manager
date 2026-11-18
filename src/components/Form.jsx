
import React, { useState } from 'react'

const Form = ({setTodos}) => {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

  return (
    <div className="flex justify-center p-6">
      <div className="w-full max-w-md space-y-6 rounded-xl border bg-white p-6 shadow-sm dark:bg-zinc-950">

        <div className="space-y-1">
          <h2 className="text-xl font-semibold tracking-tight">
            Create Task
          </h2>
          <p className="text-sm text-gray-500">
            Add a new task to your list.
          </p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium">
              Title
            </label>
            <input
              id="title"
              onChange={(e)=>{setTitle(e.target.value)}}
              value={title}
              placeholder="Enter task title"
              className="w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-sm outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="description" className="text-sm font-medium">
              Description
            </label>
            <textarea
              id="description"
              onChange={(e)=>{setDesc(e.target.value)}}
              value={desc}
              placeholder="Describe your task..."
              rows="4"
              className="w-full resize-none rounded-md border bg-transparent px-3 py-2 text-sm shadow-sm outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          <button 
            onClick={()=>{
                if(title.trim().length === 0 || desc.trim().length === 0){
                    return;
                }
                setTodos((prev)=>{
                return [...prev, {title:title.trim(),desc:desc.trim()}]
                });
                setTitle('');
                setDesc('');
            }}
            className="w-full rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-black/80 dark:bg-white dark:text-black">
            Add Task
          </button>
        </div>

      </div>
    </div>
  )
}

export default Form
