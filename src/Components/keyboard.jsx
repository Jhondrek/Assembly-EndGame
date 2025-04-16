import { clsx } from 'clsx';


function Keyboard(props){
    //keyboard creation
    const alphabet =  "abcdefghijklmnopqrstuvwxyz"

    //if you click this span tag it will save the value of the span in state
    function addLetterToState (letter){
        props.addGuessedLetter(letter)
    }

    //Creating each span of the keyboard, with classes depending of the game results

    const keyboard = alphabet.split("").map((letter, index)=>{

        //if the letter is part of the word to guess and the user has selected the letter
        const isAnswerRight = props.wordToGuess.toLowerCase().split("").includes(letter) && props.guessedLetters.includes(letter)

        //if the letter is not part of the word to guess and the user has selected the letter
         const isAnswerWrong = !props.wordToGuess.toLowerCase().split("").includes(letter) && props.guessedLetters.includes(letter)

        const clsxClass = clsx('keyPad', isAnswerWrong  && 'wrong', isAnswerRight && 'right',  props.gameEnded && "disabled");


        return(<button key={index} disabled = {props.gameEnded ? true : false} className={clsxClass} onClick={()=>addLetterToState(letter)}>{letter}</button>)
        }
    )




    return(<section   className="keyboard-cont" >{keyboard}</section>)
}

export {Keyboard}