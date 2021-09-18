import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import {
    onSnapshot,
    collection,
} from "firebase/firestore"
import { connect } from 'react-redux'

import CollectionPage from '../../components/collection/collection.component'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import { firestore, convertCollectionsSnapshopToMap } from '../../firebase/firebase.utils'
import { updateCollections } from '../../redux/shop/shop.actions'
import WithSpinner from '../../components/with-spinner/with-spinner.component'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionsPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends Component{
    state = {
        isLoading: true
    }

    unsubscriptFromSnapshop = null;

    componentDidMount(){
        const {updateCollections} = this.props;

        this.unsubscriptFromSnapshop = onSnapshot(collection(firestore, "collections"),
            (collections) => {
                const collectionsMap = convertCollectionsSnapshopToMap(collections)
                updateCollections(collectionsMap)
                this.setState({isLoading: false})
            });
    }

    componentWillUnmount(){
        this.unsubscriptFromSnapshop()
    }

    render(){
        const { match } = this.props;
        const { isLoading } = this.state;
        return (
            <div className='shop-page'>
                <Route 
                    exact path={`${match.path}`} render={
                        (props) => <CollectionsOverviewWithSpinner 
                            isLoading={isLoading} {...props}/>
                    } 
                />
                <Route path={`${match.path}/:collectionId`} render={
                        (props) => <CollectionsPageWithSpinner 
                            isLoading={isLoading} {...props}/>
                    } 
                />
            </div>  
        )
    }

}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage)