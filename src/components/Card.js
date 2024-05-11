import React from 'react'
import './../css/card.css'
import { useNavigate } from 'react-router-dom';

function Card(props) {
    const navigate = useNavigate();
   const {id,variant_id} = props?.cardDetails;
    const cardClickHandler = () =>{
      navigate(`/product/${id}/varient/${variant_id}`)
    }
    return (
      <div className="card" onClick={cardClickHandler}>
        <div className="like">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="svg"
            width="16"
            height="16"
            viewBox="0 0 20 16"
          >
            <path
              d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z"
              fill="#c2c2c2"
              class="x1UMqG"
              stroke="#FFF"
              fill-rule="evenodd"
              opacity=".9"
            ></path>
          </svg>
        </div>
        <div>
        <img src={props.cardDetails.image} alt="fail to load" />
        </div>
        <div><h4 className="namevar">{props.cardDetails.variant_name}</h4></div>
        <div><h4 className="stock">{props.cardDetails.stock_sataus}</h4></div>
        <div><p className="price"> ₹{props.cardDetails.price}</p></div>
        {/* <h4 className="dis">{props.cardDetails.discount_percent}</h4> */}
        {/* <h4>$4445.5</h4> */}
      </div>
    );
}

export default Card