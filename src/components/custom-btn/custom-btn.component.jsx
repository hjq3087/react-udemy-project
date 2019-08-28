import React from 'react'

import './custom-btn.styles.scss'

const CustomBtn = ({children, isGoogleSignIn, inverted, ...props}) => {
    const btnClass = `custom-btn 
    ${isGoogleSignIn ? 'google-sign-in' : ''} 
    ${inverted  ? 'inverted' : ''} 
    `
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
