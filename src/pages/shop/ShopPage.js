import React, { Component } from 'react'
import SHOP_DATA from './ShopData'
import Preview from '../../components/preview/preview'

export class ShopPage extends Component {
  state = {
    collections: SHOP_DATA

  }
  render() {
    const { collections } = this.state
    return (
      <div className='shop-page'>
        {
          collections.map(({ id, ...otherCollectionProps }) => (
            <Preview key={id} {...otherCollectionProps} />
          ))
        }
      </div>
    )
  }
}

export default ShopPage
