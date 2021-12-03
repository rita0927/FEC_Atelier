const axios = require('axios');
const baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/';
require('dotenv').config();
// const { apiToken } = require('../apiToken')
const headers = { Authorization: process.env.apiToken };

const makeApiRequest = (method, url, data) =>
  axios.request({
    headers,
    method,
    baseURL,
    url,
    data
  });

module.exports = makeApiRequest;
