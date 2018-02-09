import { READ_FILE } from '../actions/types';

export default function(state = {
  tmx:{}
  },
  action){
  console.log(action);

  switch(action.type){
    case READ_FILE:
    return {
      ...state,
      tmx: action.tmx
    }
    default:
      return state;
  }
}
