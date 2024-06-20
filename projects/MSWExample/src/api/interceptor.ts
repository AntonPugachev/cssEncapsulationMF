import Axios from 'axios-observable';


/** Interceptors */
const intercept = () => {
  Axios.interceptors.request.use((config: any) => {

    if (process.env.REACT_APP_HOST) {
      config.url = process.env.REACT_APP_HOST + config.url;
    }

    return config;
  });
};

export default intercept;
