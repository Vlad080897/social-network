import React, { useEffect, useState } from 'react'


const StatusContainerHooks = (props) => {
    

    const [editMode, setEditMode] = useState(false);
    const [statusHook, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const offEditMode = () => {
        setEditMode(false)
        props.updateStatus(statusHook)
    }

    const onEditMode = () => {
        setEditMode(true)
    }

    const onChange = (e) => {
        setStatus(e.currentTarget.value)

    }
    return (
        <>
            {editMode ?
                <div>
                    <input autoFocus type="text"
                        onBlur={offEditMode} value={statusHook} onChange={onChange} />
                </div>
                :
                <div onDoubleClick={onEditMode}>
                    {props.status || '---'}
                </div>}
        </>
    )
}


export default StatusContainerHooks