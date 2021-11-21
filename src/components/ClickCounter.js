import React from 'react'
import UpdatedComponent from '../hoc/withCounter'

const ClickCounter = ({count, incrementCountHandler}) =>{
    
    return (
        <button onClick={incrementCountHandler}>
            Clicked {count} times
        </button>
    )
}


export default UpdatedComponent(ClickCounter);