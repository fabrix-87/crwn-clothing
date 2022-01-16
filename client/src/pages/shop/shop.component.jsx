import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchCollectionsStart } from '../../redux/shop/shop.actions'

//const CollectionPageContainer = lazy(import('../../components/collection/collection.container'));
import CollectionPageContainer from '../../components/collection/collection.container';
//const CollectionsOverviewContainer = lazy(import('../../components/collections-overview/collections-overview.container'));
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';

const ShopPage = ({ fetchCollectionsStart }) =>{
    useEffect( () => {
        fetchCollectionsStart();
    },[fetchCollectionsStart])

    return (
        <div className='shop-page'>            
            <Routes>
                <Route                      
                    index
                    element={<CollectionsOverviewContainer/>}
                />
                <Route 
                    path={`:collectionId`} 
                    element={<CollectionPageContainer/>}  
                />
            </Routes>
        </div>  
    )
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage)