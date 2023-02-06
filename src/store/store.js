import { legacy_createStore , applyMiddleware, compose } from "redux";
import thunk from "redux-thunk"; //Communicating asynchronously with an external API to retrieve or save data
import rootReducer from "../reducers/rootReducer";

const middleware=[thunk];
const initialState = {};

const store = legacy_createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default store;
