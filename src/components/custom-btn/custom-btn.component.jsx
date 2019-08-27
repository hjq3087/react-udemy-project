import React from 'react'

import './custom-btn.styles.scss'

const CustomBtn = ({children, isGoogleSignIn, ...props}) => {
    const btnClass = `custom-btn ${isGoogleSignIn ? 'google-sign-in' : ''}`
    return (
        <button
            className={btnClass}
            {...props}
        >
            {children}
        </button>
    )
}


export default CustomBtn
