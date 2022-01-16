import { take, call, put, select, takeEvery } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as actions from './actions';
import * as consts from './constants';
import { loginAxios } from './api';
import { modal } from '../../components/shared/ModalContainer';
// PUT ALL SAGAS BELOW THIS LINE AND DO NOT REMOVE
// Individual exports for testing
export function* testSaga() {
  // See example in containers/HomePage/saga.js
}



// Individual exports for testing
export default function* appSaga(){
  // add new takeeveryhere DO NOT REMOVE


}
