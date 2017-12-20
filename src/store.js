import { createStore } from "redux";
import { connect } from "react-redux";

import { reducer } from "./reducers";

export default createStore(reducer);
