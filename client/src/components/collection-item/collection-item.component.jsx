import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart.actions'

import {
    CollectionImageContainer,
    CollectionItemContainer,
    CollectionItemPrice,
    CollectionItemName,
    CollectionFooterContainer,
    AddButton
} from './collection-item.styles'

const CollectionItem = ({ item, addItem}) => {

    const { imageUrl, name, price} = item;

    return (
        <CollectionItemContainer>
            <CollectionImageContainer imageUrl={imageUrl}/>
            <CollectionFooterContainer>
                <CollectionItemName>{name}</CollectionItemName>
                <CollectionItemPrice>{price}</CollectionItemPrice>
            </CollectionFooterContainer>
            <AddButton onClick={() => addItem(item)} customClass="inverted">Add to cart</AddButton>
        </CollectionItemContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)