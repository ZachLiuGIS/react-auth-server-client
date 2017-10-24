import "bootstrap/dist/css/bootstrap.css";
import "./styles/style.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {createStore, applyMiddleware} from "redux";
import {Router} from "react-router-dom";
import reduxThunk from "redux-thunk";

import history from "./utils/historyUtils";
import App from "./components/App";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>
    , document.getElementById("root"));
