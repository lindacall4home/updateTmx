import { READ_FILE } from '../actions/types';

export default function(state = {
  file:{}
  },
  action){
  console.log(action);

  switch(action.type){
    case READ_FILE:
    return {
      ...state,
      file: action.file
    }
    default:
      return state;
  }
}
