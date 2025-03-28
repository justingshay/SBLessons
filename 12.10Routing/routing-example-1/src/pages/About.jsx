import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const About = () => {
  const [user, setUser] = useState('mario');

  //redirects unauth user to home
  if(!user) {
    return <Navigate to='/' replace={true}/>
  }

  return (
    <div className="about">
        <h2>About Us</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptas recusandae nesciunt excepturi numquam adipisci, voluptates maxime dignissimos doloribus dolores quam ullam. Id nihil architecto aliquam. Quae repellendus nemo consequuntur.
        </p>

        <button onClick={() => setUser(null)}>Logout</button>
    </div>
  )
}

export default About