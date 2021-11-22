
import React, { useState } from 'react'

export default function Controlled() {

  const [email, setEmail] = useState();

  const handleInput = (e) => setEmail(e.target.value);


  return (
    <>
    <p>{email}</p>
    <input type="text" value={email} onChange={handleInput} />
    </>
    )
}

