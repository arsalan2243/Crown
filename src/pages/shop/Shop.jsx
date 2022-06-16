import React, { Component } from "react"
import shopdata from "./shopdata"
import CollectionPreview from "../../components/collection-preview/CollectionPreview"

export default class Shop extends Component {
  state = {
    collections: shopdata,
  }
  render() {
    const { collections } = this.state
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    )
  }
}
