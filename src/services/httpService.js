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

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
};
