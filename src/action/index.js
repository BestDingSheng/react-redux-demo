import axios from 'axios';

export const jia  =  () => ({ type: 'jia' })
export const jian  =  () => ({ type: 'jian' })
export const async = () => (dispatch , getState) => {
  axios.get('./ding.txt').then(res=>{
    let data = Number(res.data)
    dispatch({type:'async',num:data})

  })

}
