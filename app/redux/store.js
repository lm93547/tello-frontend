import createSagaMiddleware from "@redux-saga/core";
import { routerMiddleware } from "connected-react-router";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import appReducer from "../containers/App/reducer";
import { appSaga } from "../containers/App/saga";
import createReducer from "./reducers";

export default function configureStore(initialState = {}, history){
    let composeEnhancers = compose;
    const allReducers = combineReducers({
        appReducer: appReducer
    })
    
    const sagaMiddleware = createSagaMiddleware()
    const middlewares = [sagaMiddleware, routerMiddleware(history)];
    const enhancers = [applyMiddleware(...middlewares)];

    const store = createStore(
        createReducer(),
        initialState,
        composeEnhancers(...enhancers),
    );
      // Extensions
    store.runSaga = sagaMiddleware.run;
    store.injectedReducers = {}; // Reducer registry
    store.injectedSagas = {}; // Saga registry
    return store
}