import { useState } from 'react'
import Card1 from './Card1'

function App() {

  let myObj = {
    username: "Dhananjay",
    age: 21
  }

  let newArr = [1, 2, 3, 4]

  return (
    <>
      <Card1 username="Dhananjay"/>
      <Card1/>
    </>
  )
}

export default App
