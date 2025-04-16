function WordToGuess(props){
    
    const wordLetters = props.wordToGuess.split("").map((letter, index)=>{

        const word = props.isGameLost ?  (props.guessedLetters.includes(letter.toLowerCase()) ? <span key={index}>{letter}</span> : <span className="not-guessed-letters" key={index}>{letter}</span>) : (props.guessedLetters.includes(letter.toLowerCase()) ? <span key={index}>{letter}</span> : <span key={index}></span>)

        return(  
            word )
        }
    
    )

    return(
        <section className="word-to-guess-cont">
            {wordLetters}
        </section>
    )
}

export {WordToGuess}