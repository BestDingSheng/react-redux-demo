
export default function(state=0,action){
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
