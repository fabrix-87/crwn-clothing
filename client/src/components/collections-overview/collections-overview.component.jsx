import React from "react";

import './collections-overview.styles.scss'

import CollectionPreview from "../collection-preview/collection-preview.component";
import { useLocation } from "react-router-dom";

const CollectionsOverview = ({collections}) => {
    const location = useLocation();
    
    return (
        <div className='collections-overview'>
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps} path={location.pathname}></CollectionPreview>
                ))
            }  
        </div>
    )
}

export default CollectionsOverview;