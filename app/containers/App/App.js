import './App.css';
import React from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectApp from './selectors';
import injectSaga from '../../utils/injectSaga';
import { Routes, Route } from 'react-router-dom';
import appSaga  from './saga';
import injectReducer from '../../utils/injectReducer';
import appReducer from './reducer';
import  {ToastContainer}  from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { modal } from '../../components/shared/ModalContainer';

function App({dispatch, app, map,...props}) {

  return (
    <div className="">
      <ToastContainer />
          <div>
          <Routes>
                <Route 
                  path="/"           
                  element={<>Test</>} 
                />
          </Routes>
          </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  app: makeSelectApp(),
})

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
    injectSaga({key: 'app', saga: appSaga}),
    injectReducer({key: 'app', reducer: appReducer}),
    withConnect
)(App);
