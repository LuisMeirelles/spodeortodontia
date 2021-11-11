import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL || 'http://localhost:3500';

export default axios.create({ baseURL });
