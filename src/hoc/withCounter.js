import React, { useState } from 'react'


const UpdatedComponent = (OriginalComponent, incrementNumber) =>{
    
    
    const NewComponent = () =>{

    
        const [count, setCount] = useState(0)

        
        const styleX = {
            marginTop: "50px",
        }

      const incrementCountHandler = () =>{
          setCount(count + incrementNumber)
      }
        return (
            
            <OriginalComponent count={count} incrementCountHandler={incrementCountHandler} styleX={styleX}/>
				
        )
    }
    return NewComponent;
    
}

export default UpdatedComponent;