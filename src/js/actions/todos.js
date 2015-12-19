import * as types from '../constants/ActionTypes'

export function addTodo(text) {
  return { type: types.ADD_TODO, text }
}

export function deleteTodo(id) {
  return { type: types.DELETE_TODO, id }
}

export function editTodo(id, text) {
  return { type: types.EDIT_TODO, id, text }
}

export function completeTodo(id) {
  return { type: types.COMPLETE_TODO, id }
}

export function completeAll() {
  return { type: types.COMPLETE_ALL }
}

export function clearCompleted() {
  return { type: types.CLEAR_COMPLETED }
}

function requestData(obj) {
   console.log('requestData');
  return {
    type: types.REQUEST_TESTDATA,
    obj
  }
}

function receiveData(obj, json) {
   console.log('receiveData', json);
  return {
    type: types.RECEIVE_TESTDATA,
    obj,
    posts: '',//json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

export function fetchTestData(obj) {
   console.log('fetchTestData');
  return dispatch => {
    dispatch(requestData(obj))
    return fetch(`http://localhost/_tuts/test.php`,  {
          mode: 'no-cors',
          method: 'post',
          headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'
           },
           body: JSON.stringify({
             name: 'Hubot',
             login: 'hubot',
           })
      })
      .then(json => {
         console.log('good : ', json);
         return dispatch(receiveData(obj, json))
      })
      .catch(function(response){
         console.log('error : ', response);
         return response })
  }
}

/*fetch('//offline-news-api.herokuapp.com/stories')
    .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    })
    .then(function(stories) {
        console.log(stories);
    });*/
