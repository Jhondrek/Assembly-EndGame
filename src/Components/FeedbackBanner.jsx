import clsx from 'clsx';
import {getFarewellText, getSuccessText} from './utils.js'
function FeedbackBanner (props){

    let feedbackContent = ""

    //Desplegar cada mensaje en la pantalla cuando se elimina un lenguaje
    

    if(props.isGameWon){
        feedbackContent=  <>
            <h2>Felicidades lo lograste!</h2>
            <p>No tengo que aprender assembly! 🥳🎉</p>
        </>
    }else if(props.isGameLost){
        feedbackContent =<>
            <h2>Game over!</h2>
            <p>Perdiste, ahora nos toca aprender Assembly 😭</p>
        </>        
    }else if(props.isGameInProcess && props.isAnswerWrong){
        feedbackContent = <>{getFarewellText(props.languages[props.wrongGuesesCount-1].name)}</>
    }else if (props.isGameInProcess && !props.isAnswerWrong){
        feedbackContent = <>{getSuccessText(props.languages[props.wrongGuesesCount].name)}</>
    }else if(props.guessedLetters.length == 1 && !props.isAnswerWrong){
        feedbackContent = <>{getSuccessText(props.languages[props.wrongGuesesCount].name)}</>
    }

    const clsxClass = clsx("feed-back-banner-cont", { "won":props.isGameWon, lost : props.isGameLost, "lost-lang-bg" : props.isGameInProcess, "right-answer" : (props.isGameInProcess && !props.isAnswerWrong)|| (props.guessedLetters.length == 1 && !props.isAnswerWrong) } )


    return(
        <section className={clsxClass}>
            {feedbackContent}
        </section>
    )
}

export{FeedbackBanner}