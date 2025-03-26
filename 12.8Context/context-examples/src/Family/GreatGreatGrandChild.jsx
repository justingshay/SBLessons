import React, { useContext } from 'react';
import CountContext from './CountContext';

//Prop drilling
//const GreatGrandChild = ({count, add}) => {
const GreatGreatGrandChild = () => {
    const {count, increment} = useContext(CountContext);
  return (
    <div style={{ border: '4px solid #7fdbff', margin: '1rem'}}>
        <p>I'm the great-great-grandchild</p>
        <p>I also consume the count: {count}</p>
        <button onClick={increment}>Add To Count</button>
    </div>
  );
}

export default GreatGreatGrandChild;