import React, { useState } from "react"
import Square from "./components/Square"
import "./App.css"

const App = () => {
  const [board, setBoard] = useState([
    "🎲",
    "🎲",
    "🎲",
    "🎲",
    "🎲",
    "🎲",
    "🎲",
    "🎲",
    "🎲"
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
  const handleOnClick = () => {
    //console.log("restart game")
    //resets the emojis
    const newBoard = Array(board.length).fill("🎲")
    setBoard(newBoard)
    // Randomize the treasure and bomb locations
    const newTreasureLocation = Math.floor(Math.random() * newBoard.length)
    const newbombLocation = Math.floor(Math.random() * newBoard.length)
    setTreasureLocation(newTreasureLocation)
    setBombLocation(newbombLocation)

  }

  return (
    <>
      <h1>Try your Luck</h1>
      <h2>Alien is the winner, beware of the devil!</h2>
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
      <button onClick={handleOnClick}>Restart Game</button>
    </>
  )
}

export default App
