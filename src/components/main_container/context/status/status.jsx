import React, { useState } from 'react'



const Status = (props) => {
    
    return (
        <>
            {props.isEditMode ? <div><input autoFocus type="text" value={props.currentStatus} onChange={props.onChange} 
            onBlur={() => props.offEditMode()} /></div> 
            : 
            <div onDoubleClick={() => props.onEditMode()}>{props.status || '---'}</div>}
        </>
    )
}

export default Status