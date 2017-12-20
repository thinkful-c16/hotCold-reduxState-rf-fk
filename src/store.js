//will likely need to install redux-logger
//npm i --save redux-logger

import { createStore, compose, applyMiddleware } from "redux";  //add compose and applyMiddleware for prev/action/next state
import {createLogger} from 'redux-logger';  //for prev/action/next state
import { connect } from "react-redux";

import { reducer } from "./reducers";

export default createStore(reducer,
  undefined, //for prev/action/next state
  compose(    //for prev/action/next state
    applyMiddleware(createLogger()),  //for prev/action/next state
    window.devToolsExtension ? window.devToolsExtension() : f => f  //for prev/action/next state

  )
);


//the additions and changes to 
//line 4, 5, 11-16
//are all needed to make the prev/action/next state show up in the console