import axios from 'axios';
import { READ_FILE } from './types';

export const readFile = (file) => async dispatch => {
  console.log("in readFile: e ", file);
  dispatch({ type: READ_FILE, file: file });
};
