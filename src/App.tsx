import React, { useState } from 'react'

const App: React.FC = () => {
  let [count, setCount] = useState(0)
  function clickMe() {
    setCount(count + 1)
  }
  return (
    <div className="flex items-center justify-center h-screen">
        <div className='flex flex-col gap-4'>  
          <h1>There is nothing we can do</h1>
          <button onClick={clickMe} className='bg-blue-900 rounded-lg text-white p-2'>Click Me: {count}</button>
        </div>
    </div>
  )
}
export default App;