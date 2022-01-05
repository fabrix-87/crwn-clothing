import { createSelector } from "reselect";

import memoize from 'lodash.memoize'

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
)

export const selectCollectionsForProview = createSelector(
    [selectCollections],
    (collections) => collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const selectCollection = memoize((collectionUrlParam) => 
    createSelector(
        [selectCollections],
            (collections) => (collections ? collections[collectionUrlParam] : null)
    ))

export const selectionIsCollectionFetching = createSelector(
    [selectShop],
    (shop) => shop.isFetching
)

export const selectionIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
)