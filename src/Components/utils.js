export function getFarewellText(language) {
    const options = [
        `R.I.P ${language}! `,
        `¡Noooo! ¿Por qué, ${language}?`,
        `desapareciste a ${language}, y yo con medio proyecto terminado..`,
        `${language}, que tus variables siempre estén definidas en otro universo.`,
        `¡Que la fuerza te acompañe, ${language}!`,
        `Y ahora ${language}...`,
        `Te extrañaremos ${language}`,
        `Un último respiro para ti, ${language}, antes de caer en la oscuridad..`,
        `¡Y así desaparece un grande, descansa ${language}`
    ];

    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

export function getSuccessText(language) {
    const options = [
        `¡Bien hecho! Has salvado a ${language}... por ahora.`,
        `¡Sí! ${language} respira tranquilo, gracias a ti.`,
        `¡Bravo! ${language} se queda un poco más en este mundo.`,
        `¡Excelente! ${language} vive para compilar otro día.`,
        `¡Lo lograste! ${language} puede seguir siendo un héroe del código.`,
        `¡Hurra! ${language} agradece tu precisión.`,
        `¡Impresionante! ${language} sigue siendo parte del ecosistema, gracias a ti.`,
        `¡Increíble! Has protegido a ${language} de una muerte inminente!.`,
        `¡Maravilloso! ${language} todavía tiene una oportunidad.`,
        `¡Felicidades! ${language} está a salvo... por ahora.`
    ];

    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}
