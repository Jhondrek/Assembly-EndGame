export function getFarewellText(language) {
    const options = [
    `R.I.P ${language}!`,
    `Nooo! Why, ${language}?`,
    `${language} vanished, and I was halfway through my project...`,
    `${language}, may your variables always be defined in another universe.`,
    `May the force be with you, ${language}!`,
    `And now ${language}...`,
    `We will miss you, ${language}!`,
    `One last breath for you, ${language}, before fading into the darkness...`,
    `And thus a legend disappears, rest in peace ${language}.`
    ];

    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

export function getSuccessText(language) {
        const options = [
    `Well done! You saved ${language}... for now.`,
    `Yes! ${language} can breathe easy thanks to you.`,
    `Bravo! ${language} gets to stay in this world a little longer.`,
    `Excellent! ${language} lives to compile another day.`,
    `You did it! ${language} can keep being a code hero.`,
    `Hooray! ${language} thanks you for your accuracy.`,
    `Amazing! ${language} remains part of the ecosystem thanks to you.`,
    `Incredible! You protected ${language} from an imminent doom!`,
    `Wonderful! ${language} still has a chance.`,
    `Congratulations! ${language} is safe... for now.`
    ];

    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}
