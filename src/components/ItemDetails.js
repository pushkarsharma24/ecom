import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { getItemInfo } from '../services/cardService';
import './../css/card.css'

function ItemDetails() {
  const [itemInfo, setItemInfo] = useState([]);
  const [relatedProduct, setRelatedProduct] = useState([]);
  const { productId, varientId } = useParams();
  useEffect(() => {
    getItemInfo(productId, varientId)
      .then((res) => {
        setItemInfo(res?.data.data)
        setRelatedProduct(res?.data.related_products)
      })
  }, [])
  return (
    <div className='itemDetails'>
      <div className='product-image-container'>
        <img src={itemInfo.variant_image} alt='' />
      </div>
      <div className='itemContainer'>
        <h2 className='item-title'>{itemInfo.product_variant_name}</h2>
        <p className='inventory'>{itemInfo.stock_sataus}</p>
        <span className='price'>₹ {itemInfo.price}</span> M.R.P: {itemInfo.mrp}
        <h3 className='varient-title'>Color</h3>
        <div className='varient-container'>
          {itemInfo?.variant_color_values?.map((ele, index) => {
            return (
              <div key={index} className='varient-img-box'>
                <img src={ele.variant_image} alt='' className='varient-img' />
                <h6 className='varient-value-title'>{ele.value}</h6>
              </div>
            )
          })}
        </div>
        <h3 className='varient-title'>RAM</h3>
          <div className='varient-container'>
            {itemInfo?.other_variant_values?.map((ele, index) => {
              return (
                <div key={index} className='varient-img-box'>
                  <h6 className='varient-value-title'>{ele.value}</h6>
                </div>
              )
            })}
          </div>
          <h3 className='varient-title'>Storage</h3>
          <div className='varient-container'>
            {itemInfo?.variant_storage_values?.map((ele, index) => {
              return (
                <div key={index} className='varient-img-box'>
                  <h6 className='varient-value-title'>{ele.value}</h6>
                </div>
              )
            })}
          </div>
      </div>
      <div className='related-product'>
        <div className='related-product-title'>Frequently Bought Togather</div>
        <div className='releted-product-container'>
        {relatedProduct.map((ele, index)=>{
          return (
            <div key={index} className='similar-products'>
                <div className='similar-product-card'>
                  <div className='img-container'>
                    <img src={ele.variant_image} alt="" />
                  </div>
                  <div>
                    <p className='product-name'>{ele.product_variant_name}</p>
                  </div>
                  <div>
                    <p className='product-price'>{ele.price}</p>
                  </div>
                </div>
            </div>
          )
        })}
        </div>
        <button className='buy-now'>Buy Now</button>
        <button className='add-to-cart'>Add to Cart</button>
      </div>
    </div>
  )
}

export default ItemDetails

