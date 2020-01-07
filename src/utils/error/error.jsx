import React from 'react'
import './error.scss'
import error from '../../source/error.jpg'

const ErrorMsg =()=>{
    return(
        <div className='error'>
            <img src={error} alt='' />
            SHIT , IT's FUCKING ERROR 
        </div>
    )
}

export default ErrorMsg;