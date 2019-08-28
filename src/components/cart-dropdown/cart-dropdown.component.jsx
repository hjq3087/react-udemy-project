import React from 'react'

import CustomBtn from "../custom-btn/custom-btn.component"

import './cart-dropdown.styles.scss'

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'></div>
        <CustomBtn>GO TO CEHCKOUT</CustomBtn>
    </div>
)

export default CartDropdown
