/* eslint-disable no-undef */
export default {
  baseUrl: process.env.BASE_HOST
    ? `${process.env.BASE_HOST}:${process.env.PORT}`
    : 'http://localhost:3000'
};
