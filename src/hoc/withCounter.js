import React, { useState } from 'react'


const UpdatedComponent = OriginalComponent =>{
    
    
    const NewComponent = () =>{

    
        const [count, setCount] = useState(0)

        
        const styleX = {
            marginTop: "50px",
        }

      const incrementCountHandler = () =>{
          setCount(count + 1)
      }
        return (
            
            <OriginalComponent count={count} incrementCountHandler={incrementCountHandler} styleX={styleX}/>
        )
    }
    return NewComponent;
    
}

export default UpdatedComponent;