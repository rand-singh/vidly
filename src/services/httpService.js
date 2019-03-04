import axios from "axios";
import logger from "./logService";
import { toast } from "react-toastify";

// whenever we have a response with an error this function will be
// called first and then the control will pass to the catch block
axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log("log the error", error);
    logger.log(error);
    toast("unexpected error occured");
  }

  return Promise.reject(error);
});

function setJwt(jwt) {
  // tell axios to include this header in all http requests
  // if the user is not logged in token will be undefined and the header will not be set
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt
};
