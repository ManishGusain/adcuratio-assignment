import axios from 'axios';
import { BASE_URL } from '../constants/General';

const API = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
});

export const hot_questions = (pageno, qtag) => API.get(`2.3/questions?page=${pageno}&order=desc&sort=hot&tagged=${qtag}&site=stackoverflow`);