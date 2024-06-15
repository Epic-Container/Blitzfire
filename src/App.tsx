import React, { useState } from 'react'

const App: React.FC = () => {
  let [count, setCount] = useState(0)
  function clickMe() {
    setCount(count + 1) 
  }
const [menuOpen, setMenuOpen] = useState(false);

const toggleMenu = () => {
  setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex items-center justify-center h-screen">
        <div className='flex flex-col gap-4'>  
          <h1>There is nothing we can do</h1>
          <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                  <button
                          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                                  onClick={toggleMenu}
                                        >
                                                Menu
                                                      </button>
                                                            {menuOpen && (
                                                                    <div className="mt-4 flex flex-col items-center bg-white shadow-md rounded-md p-4">
                                                                              <a href="#" className="text-blue-500 py-2">Home</a>
                                                                                        <a href="#" className="text-blue-500 py-2">About</a>
                                                                                                  <a href="#" className="text-blue-500 py-2">Services</a>
                                                                                                            <a href="#" className="text-blue-500 py-2">Contact</a>
                                                                                                                    </div>
                                                                                                                          )}
                                                                                                                              </div>
          <button onClick={clickMe} className='bg-blue-900 rounded-lg text-white p-2'>Click Me: {count}</button>
        </div>
    </div>

  )
}

export default App;