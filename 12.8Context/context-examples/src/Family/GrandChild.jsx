import React from 'react';
import GreatGrandChild from './GreatGrandChild';
//PropDrilling
//const GrandChild = ({count, add}) => {
const GrandChild = () => {
  return (
    <div style={{ border: '4px solid #39cccc', margin: '1rem'}}>
        <p>I'm the grandchild!</p>
        {/* Prop drilling
        <GreatGrandChild count={count} add={add}/> */}
        <GreatGrandChild />
    </div>
  );
}

export default GrandChild;