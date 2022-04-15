import React from "react";
import s from '../context.module.css'

const Status2: React.FC<IPropsForStatus2> = ({ statusState, editMode, onEditMode, offEditMode, onChange, localStatus }) => {
    return (
        <>
            {editMode ? <input autoFocus onBlur={offEditMode} onChange={onChange} type="text" value={localStatus} />
                :
                <span className={s.status} onDoubleClick={onEditMode} >{statusState || '...'}</span>}
        </>
    )
}


export default Status2

type IPropsForStatus2 = {
    statusState: string
    editMode: boolean
    onEditMode: () => void
    offEditMode: () => void
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    localStatus: string

}