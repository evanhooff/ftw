import axios from 'axios';

const VueAxios = {

  install (Vue, options) {
    let pendingCall = false;
    let callNr = 0;

    axios.interceptors.request.use(function (config) {
      if (!pendingCall) {
        config.requestID = ++callNr;
        config.headers.common['Authorization'] = 'bearer ' + localStorage.getItem('accessToken');
        return config;
      }
      return null;
    }, function (error) {
      // Do something with request error
      return Promise.reject(error);
    });

    axios.interceptors.response.use(function (response) {
      pendingCall = false;
      if (response.config.requestID !== callNr) {
        return Promise.reject(new Error('ABORTED'));
      }
      return response;
    }, function (error) {
      return Promise.reject(error);
    });

    axios.defaults.baseURL = options.baseUrl;

    Vue.prototype.$http = axios;
  }
};

export default VueAxios;
