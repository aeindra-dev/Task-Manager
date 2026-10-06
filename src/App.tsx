import { useState } from 'react'
import './App.css'
import { Button } from '@/components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex min-h-svh'>
        <div className="flex flex-1 min-h-svh flex-col items-center justify-center bg-red-500">
          <Button onClick={()=>setCount(prev=>prev+1)}>Count: {count}</Button>
        </div>
        <div className='bg-blue-600 flex flex-1 items-center justify-center text-white'>
          Right
        </div>
      </div>
    </>
  )
}

export default App
