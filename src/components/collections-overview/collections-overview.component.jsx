import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForProview } from '../../redux/shop/shop.selectors'

import './collections-overview.styles.scss'

import CollectionPreview from "../collection-preview/collection-preview.component";

const CollectionsOverview = ({collections}) => (
    <div className='collections-overview'>
        {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
            ))
        }  
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForProview
})

export default connect(mapStateToProps)(CollectionsOverview)