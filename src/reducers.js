import {
    ADD_GUESS,
    RANDOM_ANSWER,
    SHOW_FEEDBACK,
    AURAL_UPDATE,
    RESET
  } from "./actions";
  
  const initialState = {
    guesses: [],
    feedback: "Make your guess!",
    auralStatus: "",
    correctAnswer: null
  };
  //Render (Component) => Action => Reducer => Re-Render (Component)
  
  export const reducer = (state = initialState, action) => {
    if (action.type === ADD_GUESS) {
      const difference = Math.abs(action.number - state.correctAnswer);
  
      let feedback;
      if (difference >= 50) {
        feedback = "You're Ice Cold...";
      } else if (difference >= 30) {
        feedback = "You're Cold...";
      } else if (difference >= 10) {
        feedback = "You're Warm.";
      } else if (difference >= 1) {
        feedback = "You're Hot!";
      } else {
        feedback = "You got it!";
      }
      return Object.assign({}, state, {
        guesses: [...state.guesses, action.number],
        feedback
      });
    } else if (action.type === RANDOM_ANSWER) {
      return Object.assign({}, state, { correctAnswer: action.number });
    } else if (action.type === SHOW_FEEDBACK) {
      return Object.assign({}, state, { feedback: action.feedback });
    } else if (action.type === AURAL_UPDATE) {
      const { guesses, feedback } = state;
      const pluralize = guesses.length !== 1;
  
      let auralStatus = `Here's the status of the game right now: ${feedback} You've made ${
        guesses.length
      } ${pluralize ? "guesses" : "guess"}.`;
      if (guesses.length > 0) {
        auralStatus += ` ${
          pluralize ? "In order of most- to least-recent, they are" : "It was"
        }: ${guesses.reverse().join(", ")}`;
      }
      return Object.assign({}, state, { auralStatus });
    } else if (action.type === RESET) {
      return Object.assign({}, state, initialState);
    } else return state;
  };
  
  //   this.setState({
  //     feedback,
  //     guesses: [...this.state.guesses, guess]
  //   });
  
  //   // We typically wouldn't touch the DOM directly like this in React
  //   // but this is the best way to update the title of the page,
  //   // which is good for giving screen-reader users
  //   // instant information about the app.
  //   document.title = feedback ? `${feedback} | Hot or Cold` : 'Hot or Cold';
  // }