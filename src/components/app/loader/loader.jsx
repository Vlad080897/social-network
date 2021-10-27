import React from 'react'
import loading from '../../img/loading.svg'

const Loader = (props) => {
    return (
        <div>
            <img src={props.isLoading ? loading : null} alt="111111" />
        </div>
    )
}

export default Loader
