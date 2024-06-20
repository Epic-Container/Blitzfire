import React from 'react';
import Menu from './components/menu';
import TextField from './components/text field';

const App: React.FC = () => {
  return (
    <div className="bg-[#1d2227] h-full min-h-screen w-full min-w-screen">
      <Menu />
      <TextField />
    </div>
  );
}

export default App;
