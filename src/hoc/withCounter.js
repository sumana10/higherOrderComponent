import React, { useState } from 'react'

const UpdatedComponent = OriginalComponent =>{
    
    const NewComponent = () =>{

        const [count, setCount] = useState(0)

      const  incrementCountHandler = () => {
           setCount(count + 1)
        }
        return (
            <OriginalComponent count={count}
            incrementCountHandler={incrementCountHandler}/>
        )
    }
    return NewComponent;
    
}

export default UpdatedComponent;