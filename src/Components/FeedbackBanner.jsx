import clsx from 'clsx';
import {getFarewellText, getSuccessText} from './utils.js'
function FeedbackBanner(props) {

    let feedbackContent = "";

    // Show messages when a language is eliminated

    if (props.isGameWon) {
        feedbackContent = <>
            <h2>Congratulations, you did it!</h2>
            <p>We won’t have to learn Assembly! 🥳🎉</p>
        </>;
    } else if (props.isGameLost) {
        feedbackContent = <>
            <h2>Game Over!</h2>
            <p>You lost, now we have to learn Assembly 😭</p>
        </>;
    } else if (props.isGameInProcess && props.isAnswerWrong) {
        feedbackContent = <>{getFarewellText(props.languages[props.wrongGuesesCount - 1].name)}</>;
    } else if (props.isGameInProcess && !props.isAnswerWrong) {
        feedbackContent = <>{getSuccessText(props.languages[props.wrongGuesesCount].name)}</>;
    } else if (props.guessedLetters.length === 1 && !props.isAnswerWrong) {
        feedbackContent = <>{getSuccessText(props.languages[props.wrongGuesesCount].name)}</>;
    }

    const clsxClass = clsx(
        "feed-back-banner-cont",
        {
            won: props.isGameWon,
            lost: props.isGameLost,
            "lost-lang-bg": props.isGameInProcess,
            "right-answer": (props.isGameInProcess && !props.isAnswerWrong) ||
                            (props.guessedLetters.length === 1 && !props.isAnswerWrong)
        }
    );

    return (
        <section className={clsxClass}>
            {feedbackContent}
        </section>
    );
}

export { FeedbackBanner };
