/*
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { selectionIsCollectionsLoaded } from '../../redux/shop/shop.selectors'
import WithSpinner from '../with-spinner/with-spinner.component'
import collectionsPage from './collection.component'

const mapStateToProps = createStructuredSelector({
    isLoading: (state) => !selectionIsCollectionsLoaded(state)
})

export const CollectionPageContainer = compose(
    connect(mapStateToProps)    
)(collectionsPage);
*/
import WithSpinner from '../with-spinner/with-spinner.component'
import CollectionPage from './collection.component'

import { gql, useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom';

const GET_COLLECTION = gql`
    query getCollectionsByTitle($title: String!){
        getCollectionsByTitle(title: $title) {
            id,
            title,
            items {
                id,
                name,
                price,
                imageUrl
            }
        }
    }
`;

const CollectionPageContainer = () => {
    const params = useParams();
    const { loading, data } = useQuery(GET_COLLECTION, {
        variables: { title: params.collectionId}
      });

    if(loading) return (<WithSpinner/>);
    return (<CollectionPage collection={data.getCollectionsByTitle}/>);
}

export default CollectionPageContainer;