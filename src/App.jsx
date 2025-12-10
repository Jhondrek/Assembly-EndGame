import React, { useState } from "react";
import './App.css'
import {Header} from './Components/Header.jsx'
import {FeedbackBanner} from './Components/FeedbackBanner.jsx'
import { Chips } from './Components/Chips.jsx'
import {WordToGuess} from './Components/WordToGuess.jsx'
import { Keyboard } from "./Components/keyboard.jsx";
import { languages } from "./Components/languages.js"
import { words } from "./Components/words.js";
import Confetti from 'react-confetti'

function App() {

  //Remember that "useState" always needs to be inside of a function or a functional componenet in order to work
  const [wordToGuess, setWordToGuess] = useState(words[Math.floor(Math.random() * words.length-1)])
  const [guessedLetters, setGuessedLetters] = useState([])
  
  //stores the number of wrong answers
  let wrongGuesesCount = 0 
  
  guessedLetters.forEach((letter)=>{
    !wordToGuess.toLowerCase().split("").includes(letter) ? wrongGuesesCount++ : wrongGuesesCount
  })

  //stores bolean values indicating if the game is over or not

  const isGameWon = wordToGuess.toLowerCase().split("").every((letter)=>
    guessedLetters.includes(letter)
    )

  const isGameLost = wrongGuesesCount == languages.length - 1

  const isGameInProcess = wrongGuesesCount > 0  && !isGameLost && !isGameWon

  const gameEnded = isGameLost || isGameWon

  const lastGuessedLetter = guessedLetters[guessedLetters.length-1]

  const isAnswerWrong = !wordToGuess.toLowerCase().split("").includes(lastGuessedLetter) &&lastGuessedLetter
  

  //adds a letter on state of the letter is not already in state

  function addGuessedLetter(letter){
    setGuessedLetters((prevGuessedLetters)=>{
      return(prevGuessedLetters.includes(letter) ? [...prevGuessedLetters] : [...prevGuessedLetters, letter])
    })
  }

  function restartGame(){
    setWordToGuess(words[Math.floor(Math.random() * words.length-1)])
    setGuessedLetters([])
  }


  return (
    <>
      <main className='main-container'>
        {isGameWon && <Confetti width={window.innerWidth}
      height={window.innerHeight}/>}
        <Header/>
        <FeedbackBanner  isGameWon = {isGameWon} isGameLost = {isGameLost} isGameInProcess = {isGameInProcess} languages = {languages} wrongGuesesCount = {wrongGuesesCount} isAnswerWrong = {isAnswerWrong} guessedLetters = {guessedLetters}/>
        <Chips wrongGuesesCount = {wrongGuesesCount}/>
        <WordToGuess wordToGuess = {wordToGuess} guessedLetters = {guessedLetters} isGameLost = {isGameLost}/>
        <Keyboard wordToGuess = {wordToGuess} addGuessedLetter ={addGuessedLetter} guessedLetters = {guessedLetters} gameEnded = {gameEnded} />
        {gameEnded && <button onClick={()=>{restartGame()}} className="new-game-btn">New Game</button>}
      </main>
    </>

  )
}

export default App
