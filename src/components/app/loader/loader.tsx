import React from 'react'
import loading from '../../img/loading.svg'

type PropsType = {
    isLoading: boolean
}

const Loader: React.FC<PropsType> = ({ isLoading }) => {
    return (
        <div>
            <img src={`${isLoading ? loading : null}`} alt="111111" />
        </div>
    )
}

export default Loader
