import React from 'react'
import UpdatedComponent from '../hoc/withCounter'

const HoverCounter = ({ count, incrementCountHandler }) =>{
    return (
        <h1 onMouseOver = {incrementCountHandler}>Hovered {count} times</h1>
    )
}

export default UpdatedComponent(HoverCounter);