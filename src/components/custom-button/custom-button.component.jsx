import React from 'react'

import './custom-button.styles.scss'

const CustomButton = ({children, customClass, ...otherProps}) => (
    <button className={'custom-button' + (customClass ? ' ' + customClass : '')} {...otherProps}>
        {children}
    </button>
)

export default CustomButton