import React from 'react'
import Child from './Family/Child';
import ThemeProvider from './ThemeProvider';
import Navbar from './Navbar';
import './App.css'

function App() {

  return (
    <div className='App'>
      <ThemeProvider>            
        <Navbar />
        <Child />
      </ThemeProvider>
    </div>
  );
}

export default App;
