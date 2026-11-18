
import React from 'react'

const Display = ({ todos,setTodos }) => {
  return (
    <div className="w-full max-w-md max-h-118 mt-6 space-y-3 overflow-y-auto">
      {todos.map((todo, index) => {
        return (
          <article
            key={index}
            className="flex items-start justify-between gap-4 rounded-xl border bg-white p-4 shadow-sm dark:bg-zinc-950"
          >
            <div className="min-w-0 space-y-1">
              <h2 className="font-semibold text-sm">{todo.title}</h2>
              <p className="text-sm text-gray-500 wrap-break-word">
                {todo.desc}
              </p>
            </div>

            <button 
              onClick={()=>{
                const filteredTodos = todos.filter((obj,idx)=>{
                  return index!=idx;
                })
                setTodos(filteredTodos);
              }}
              className="shrink-0 rounded-md border px-3 py-1.5 text-sm font-medium text-red-500 transition hover:bg-red-50 dark:hover:bg-red-950">
              Delete
            </button>
          </article>
        )
      })}
    </div>
  )
}

export default Display
