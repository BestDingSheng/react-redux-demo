import { combineReducers } from 'redux'
function counter(state=0,action){
  if(action.type=='jia'){
    return state+1
  }else if(action.type=='jian'){
    return state-1
  }else if(action.type=='async'){
    return state+action.num
  }else{
    return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
  case 'ADD_TODO':
    return state.concat([action.text])
  default:
    return state
  }
}


export default combineReducers({
  todos,
  counter
})
