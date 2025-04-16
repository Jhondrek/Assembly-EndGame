import { languages } from "./languages";
import clsx from 'clsx';

function Chips(props){
    const chips = languages.map((language, index)=>{
        
        
        const isChipEliminated = index < props.wrongGuesesCount

        return <button key={index} className={isChipEliminated ? "lost" : undefined}   style={{backgroundColor: language.backgroundColor, color : language.color}}>{language.name}</button>
    }
    )

    return(
        <section className="chips-cont">
            {chips}
        </section>
    )
        
    
}

export {Chips}