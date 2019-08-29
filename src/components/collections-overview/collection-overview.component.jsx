import React from 'react'
import {connect} from "react-redux"
import {createStructuredSelector} from "reselect"

import {selectCollectionsForPreview} from "../../redux/shop/shop.selectors"

import CollectionPreview from "../collection-preview/collection-preview.component"

import './collection-overview.styles.scss'

const CollectionsOverview = ({collection}) => (
    <div className='collections-overview'>
        {collection.map(({id, ...props}) => (
            <CollectionPreview key={id} {...props} />
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collection: selectCollectionsForPreview,
})

export default connect(mapStateToProps)(CollectionsOverview)

