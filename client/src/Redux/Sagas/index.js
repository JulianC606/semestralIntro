import { all } from 'redux-saga/effects'
import actionWatcher from './fetchStructure'

export default function * rootSaga () {
  yield all([
    actionWatcher()
  ])
}
