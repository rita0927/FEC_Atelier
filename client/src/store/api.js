import axios from "axios"

const port = 3000;

//localhost:${port} needs to be updated to the public url for deployment
const baseURL = `http://localhost:${port}/api/`;

const makeApiCall = (method, url, data) => axios.request({ baseURL, url, method, data });

export default makeApiCall;