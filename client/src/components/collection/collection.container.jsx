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
    connect(mapStateToProps),
    WithSpinner    
)(collectionsPage);