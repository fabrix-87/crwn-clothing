import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { selectionIsCollectionFetching } from '../../redux/shop/shop.selectors'
import WithSpinner from '../with-spinner/with-spinner.component'
import collectionsOverviewComponent from './collections-overview.component'

const mapStateToProps = createStructuredSelector({
    isLoading: selectionIsCollectionFetching
})

export const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner    
)(collectionsOverviewComponent);