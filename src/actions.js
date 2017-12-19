export const SHOW_FEEDBACK = 'SHOW_FEEDBACK'; //hotter/colder etc.

export const RANDOM_ANSWER = 'RANDOM_ANSWER'; //random number generated at game start
export const AURAL_UPDATE = 'AURAL_UPDATE';


//tracking last guess
export const ADD_GUESS = 'ADD_GUESS';
export const addGuess = number => ({
    type: ADD_GUESS,
    number
});


export const showFeedback = (feedback) => ({
    type: SHOW_FEEDBACK,
    text: ''
});

export const randomAnswer = () => {
    const number = Math.round(Math.random() * 100) + 1
    return {
        type: RANDOM_ANSWER,
        number 
    }
}

export const auralUpdate = () => {
    return {
        type: AURAL_UPDATE,
    }
}