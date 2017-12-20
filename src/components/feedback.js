import React from 'react';
import {connect} from 'react-redux';
import './feedback.css';

export function Feedback(props) {
    const key = props.guessCount;
    let guessAgain;
    if (key !== 0) {
    guessAgain = <span className="visuallyhidden">Guess again!</span>;
  }
  return (
    <h2 
      key={key}
      id="feedback"
      role="status"
      aria-live="assertive"
      aria-atomic="true"
    >
      {props.feedback} {guessAgain}
    </h2>
  );
}

const mapStateToProps = state => ({
  guessCount: state.guesses.length,
  feedback: state.feedback
});

export default connect(mapStateToProps)(Feedback);

/*
** The guessCount update above is added so that the feedback after
** each question is treated as a DOM change, even when a new guess
** does not change the feedback text. Needed for consistent aural
** feedback with text readers.
*/
