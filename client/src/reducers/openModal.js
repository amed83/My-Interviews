import {OPEN_MODAL} from '../actions/costants'

const initialState= {
    open:false
}

const openModal =(state=initialState, action)=>{
      switch(action.type){
          case OPEN_MODAL : 
          return{
              ...state,
              open:true
          }
      }
      return state
}

export default openModal