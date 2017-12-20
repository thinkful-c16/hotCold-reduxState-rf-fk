import React from 'react';
import {connect} from 'react-redux'
import './guess-count.css';

export function GuessCount(props) {
    const isPlural = props.guessCount !== 1;
    const guessNoun = isPlural ? 'guesses' : 'guess';
    return (
        <h2 id="guessCount">
            You've made <span id="count">{props.guessCount}</span> {guessNoun}!
        </h2>
    );
}

const mapStateToProps = state =>({
    guessCount: state.guesses.length
});
  
export default connect(mapStateToProps)(GuessCount);

// This component reads from the state (to get the length of the guesses array),
// but does not write a new state. It does not need to refactor the function as
// a class. mapStateToProps only needs the state, not props.