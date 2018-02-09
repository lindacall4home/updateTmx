import axios from 'axios';
import { READ_FILE } from './types';
import TmxData from '../logic/TmxData';


export const readFile = (file) => async dispatch => {
  console.log("in readFile: ", file);
  var tmx = new TmxData(file.fileContents);
  console.log(tmx);
  dispatch({ type: READ_FILE, tmx: tmx });
};
