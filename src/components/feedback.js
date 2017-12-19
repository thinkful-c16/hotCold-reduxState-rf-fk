import React from 'react';
import {connect} from 'react-redux';
//import Game from './game';

import './feedback.css';

export class Feedback extends React.Component {

  
  render(){
    const key = this.props.guessCount;
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
        {this.props.feedback} {guessAgain}
      </h2>
    );
  }
}

const mapStateToProps = (state, props) => {
   return {
     feedback: state.feedback
   }
}


export default connect(mapStateToProps)(Feedback);