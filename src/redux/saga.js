/* eslint-disable no-constant-condition */
import {
  put, takeEvery, takeLeading, take, call
} from 'redux-saga/effects'
import { addFavorites, deleteFavorites } from './action'

export function* ADD({ id }) {
  yield put({ type: 'ADD', id })
}

export function* DELETE({ id }) {
  yield put({ type: 'DELETE', id })
}

export default function* rootSaga() {
  yield takeEvery('ADD_DATAS', ADD)
  yield takeEvery('DELETE_DATAS', DELETE)
}
