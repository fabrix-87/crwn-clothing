import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

const WithSpinner = () => {
    return (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    )
}


/*
const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps}) => {
    
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ) : (
        <WrappedComponent {...otherProps} />
    )
}
*/

export default WithSpinner;