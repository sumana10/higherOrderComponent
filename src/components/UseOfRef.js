import React,{useState, useEffect, useRef} from 'react'

export default function UseOfRef() {
  
  const nameRef = useRef(null);

  useEffect(() => {

    nameRef.current.focus();
   
  }, [])
  
  return (
    <div>
    <input type="text" ref={nameRef}/>
    </div>
  )
}
