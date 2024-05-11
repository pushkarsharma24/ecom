import React, { useState, useEffect } from 'react'
import { getCardInfo } from '../services/cardService'
import Card from './Card'
import './../css/card.css'
import Dummy from './Dummy'

function CardComponent() {
    const [cardInfo, setCardInfo] = useState([]) 
    useEffect(() =>{
        getCardInfo()
        .then((res) =>{
            setCardInfo(res)
        })
    },[])
  return (
   <>
       <Dummy />
    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent :'space-between'}}>
    {cardInfo.map((item, index) =>{
      return (<Card key={index} cardDetails={item}></Card>)
    })}
    </div>
   </>
  )
}

export default CardComponent