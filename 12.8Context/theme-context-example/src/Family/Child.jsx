import React, { useState, useContext } from 'react';
import GrandChild from './GrandChild';
import CountContext from './CountContext';
import ThemeContext from '../ThemeContext';

const Child = () => {
    //prop drilling
    const [count, setCount] = useState(0);
    const {color} = useContext(ThemeContext);
    const increment = () => {
        setCount(count => count + 1);
    }

  return (
    <CountContext.Provider value={{count, increment}}>
        <div style={{ border: '4px solid #0074d9', margin: '1rem', width: '500px'}}>
            <p>I'm the child!</p>
            <p>I own count. Count is : {count}</p>
            <button style={{ color }} onClick={increment}>Add To Count</button>
            {/* Prop drilling
            <GrandChild count={count} add={addToCount}/> */}
            <GrandChild />
        </div>
    </CountContext.Provider>    
  );
}

export default Child;