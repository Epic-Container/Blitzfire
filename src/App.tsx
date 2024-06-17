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
          <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100">
                  <nav className="w-full bg-black text-white py-2">
                          <div className="container mx-auto flex justify-around">
                                    <a href="#" className="mx-2">Mengajukan</a>
                                              <a href="#" className="mx-2">Sunting</a>
                                                        <a href="#" className="mx-2">Navigasi</a>
                                                                  <a href="#" className="mx-2">Proyek</a>
                                                                            <a href="#" className="mx-2">Membantu</a>
                                                                                    </div>
                                                                                          </nav>
                                                                                                </div>
          <button onClick={clickMe} className='bg-blue-900 rounded-lg text-white p-2'>Click Me: {count}</button>
        </div>
    </div>

  )
}

export default App;