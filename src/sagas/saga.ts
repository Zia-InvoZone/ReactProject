import { takeLatest, put } from "redux-saga/effects";

function* sagaAsync() {
  let data = "";
  yield fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => {
      data = json;
    });
  yield put({ type: "Toggle_Async", ApiData: data });
}

export default function* sagaFun() {
  yield takeLatest("Toggle", sagaAsync);
}
