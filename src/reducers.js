import {SHOW_FEEDBACK, ADD_GUESS, RANDOM_ANSWER, AURAL_UPDATE} from './actions'

const initialState = {
    guesses: [],
    feedback:'Make your guess!',
    auralStatus: '',
    correctAnswer: null
}

export const reducer = (state=initialState, action) => {
 if (action.type === ADD_GUESS) {
     //merging the new object with the previous state and it contains just the guesses property
    return Object.assign({}, state, {guesses: [...state.guesses, action.number]} )
        
    } else if (action.type === RANDOM_ANSWER) {
        return Object.assign({}, state, {correctAnswer: action.number})
    } else if (action.type === SHOW_FEEDBACK) {
        return Object.assign({}, state, {feedback: action.feedback})
    } else if (action.type === AURAL_UPDATE) {
    const { guesses, feedback } = state;
    const pluralize = guesses.length !== 1;

    let auralStatus = `Here's the status of the game right now: ${feedback} You've made ${guesses.length} ${pluralize ? 'guesses' : 'guess'}.`

    if (guesses.length > 0) {
        auralStatus += ` ${pluralize
            ? 'In order of most- to least-recent, they are'
            : 'It was'}: ${guesses.reverse().join(', ')}`;
    }

    return Object.assign({}, state, {auralStatus})
}
else return state
 
}