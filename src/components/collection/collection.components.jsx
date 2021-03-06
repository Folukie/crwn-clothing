import React from 'react';

import './collection.styles.scss';

import CollectionItem from '../collection-item/collection-item.components';

const CollectionPage = ({collection}) =>{
    const {title,items} = collection;
    return(
      <div className='collection-page'>
          <h2 className='title'>{title}</h2>
          <div>
              {
                  items.map(item => (
                    <CollectionItem key={item.id} item={item} />)
                  )
              }
          </div>
      </div>

    )
}

export default CollectionPage;