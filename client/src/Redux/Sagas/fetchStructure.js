import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

function * fetchStructure () {
  try {
    const structure = yield axios.get('/api/structure')
      .then(res => res.data)
    yield put({ type: 'UPDATE_STRUCTURE', payload: structure })
  } catch (e) {
    yield put({ type: 'HANDLE_ERROR', payload: e })
  }
}

export default function * actionWatcher () {
  yield takeLatest('FETCH_STRUCTURE', fetchStructure)
}
