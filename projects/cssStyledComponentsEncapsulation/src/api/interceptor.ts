import Axios from 'axios-observable';

const onRequest = (config: any) => {

  if (process.env.REACT_APP_HOST) {
    config.url = process.env.REACT_APP_HOST + config.url;
  }

  return config;
};

/** Interceptors */
const intercept = () => {
  Axios.interceptors.request.use(onRequest);
};

export default intercept;
