import React from 'react'
import { Link } from 'react-router-dom'
import CollectionItem from '../collection-item/collection-item.component'

import './collection-preview.styles.scss'

const CollectionPreview = ({title, items, path}) => {
    const routeName = encodeURI(title);
    return(
    <div className="collection-preview">
        <h1 className="title"><Link to={`${path}/${routeName.toLowerCase()}`}>{title}</Link></h1>
        <div className="preview">
        {
            items
                .filter((items,index) => index < 4)
                .map((item) => (
                    <CollectionItem key={item.id} item={item}/>
                )
            )
        }
        </div>
    </div>
)}

export default CollectionPreview