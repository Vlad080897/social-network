import React from 'react'
import loading from '../../img/loading.svg'

const Loader = ( props) => {
    debugger
    return (
        <div>
            <img src={props.isLoading ? loading : null} alt="111111" />
        </div>
    )
}

export default Loader
