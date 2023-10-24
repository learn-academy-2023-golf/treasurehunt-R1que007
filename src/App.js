import React, { useState } from "react"
import Square from "./components/Square"
import "./App.css"

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])
  const [treasureLocation, setTreasureLocation] = useState(Math.floor(Math.random() * board.length))

  const [bombLocation, setBombLocation] = useState(Math.floor(Math.random() * board.length))

  console.log("treasure:", treasureLocation)
  console.log("bomb:", bombLocation)

  const handleGamePlay = (index) => {
   // alert(index)
let updatedBoard = [...board]
   updatedBoard[index] = "🤡"
   setBoard(updatedBoard)
   if(treasureLocation === index){
    updatedBoard[index] = "👽"
   setBoard(updatedBoard)
   } else if (bombLocation === index){
    updatedBoard[index] = "👹"
   setBoard(updatedBoard)
   }
   
  }
  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="gameboard">
      {board.map((value, index) => {
        return(
        <Square
        value={value}
        key={index}
        index={index}
        handleGamePlay={handleGamePlay}
         />
        )
      })}
      </div>
    </>
  )
}

export default App
