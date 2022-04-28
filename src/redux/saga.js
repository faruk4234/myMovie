/* eslint-disable no-constant-condition */
import axios from 'axios'
import {
  put, takeEvery, call, all
} from 'redux-saga/effects'

function* ADD({ id }) {
  yield put({ type: 'ADD', id })
}

function* DELETE({ id }) {
  yield put({ type: 'DELETE', id })
}

function* GET_LOCAL_DATAS({ datas }) {
  yield put({ type: 'GET_LOCALS', datas })
}

function* GET_DATA({ URL, category }) {
  try {
    const { data } = yield call(axios, URL)
    yield put({ type: category, datas: data.results })
  } catch (e) {
    console.log(e)
  }
}

export default function* rootSaga() {
  yield takeEvery('ADD_FAVORI', ADD)
  yield takeEvery('DELETE_FAVORI', DELETE)
  yield takeEvery('GET_DATAS', GET_DATA)
  yield takeEvery('GET_LOCAL_DATAS', GET_LOCAL_DATAS)
}
