import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CardComponent from '../components/CardComponent'
import Dummy from '../components/Dummy'
import ItemDetails from '../components/ItemDetails'

function AppRoute() {
  return (
    <Routes>
    <Route path="/" element={<CardComponent />}></Route>
    <Route exact path='/dummy' element = {<Dummy/>}></Route>
    <Route exact path="/product/:productId/varient/:varientId" element={<ItemDetails />}></Route>
    </Routes>
  )
}

export default AppRoute