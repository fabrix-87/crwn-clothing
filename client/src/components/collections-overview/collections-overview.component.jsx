import React from "react";
import { selectCollectionsForProview } from '../../redux/shop/shop.selectors'

import './collections-overview.styles.scss'

import CollectionPreview from "../collection-preview/collection-preview.component";
import { withRouter } from "react-router";
import { useSelector } from "react-redux";

const CollectionsOverview = ({match}) => {
    const collections = useSelector(selectCollectionsForProview);

    return (
        <div className='collections-overview'>
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps} path={match.path}></CollectionPreview>
                ))
            }  
        </div>
    )
}

export default withRouter(CollectionsOverview);