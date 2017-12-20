import React from 'react';
import {connect} from 'react-redux'
import './guess-list.css';

export function GuessList(props) {
    const guesses = props.guesses.map((guess, index) => (
      <li key={index}>
        {guess}
      </li>
    ));
    return (
      <ul id="guessList" className="guessBox clearfix">
        {guesses}
      </ul>
    );
}

const mapStateToProps = state => ({
    guesses: state.guesses
});

export default connect(mapStateToProps)(GuessList);

// This component reads from the state and writes a new state, with the
// updated guesses array. It does not need to refactor the function as
// a class. mapStateToProps only needs the state, not props.