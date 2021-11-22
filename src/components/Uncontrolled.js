import React,{useRef} from 'react'

export default function Uncontrolled() {
  
    const inputRef = useRef(null);
    const handleSubmit = () =>{
      const value = inputRef.current.value
     // console.log(value);
      alert(value)
    }
    
    return (
    
      <>
      <input type="text" defaultValue="bar" ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
      </>
      
      )

}
