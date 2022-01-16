import React, {useContext} from 'react'
import { cartContex } from '../../providers/cart/cart.provider'

import {
    CollectionImageContainer,
    CollectionItemContainer,
    CollectionItemPrice,
    CollectionItemName,
    CollectionFooterContainer,
    AddButton
} from './collection-item.styles'

const CollectionItem = ({ item}) => {

    const { imageUrl, name, price} = item;
    const {addItem} = useContext(cartContex);

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

export default CollectionItem;