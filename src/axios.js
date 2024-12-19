import axios from "axios";
import {baseURL} from './components/constants/constant'
const instance = axios.create({
    baseURL: baseURL,

  });

export default instance