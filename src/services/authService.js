import jwtDecode from "jwt-decode";
import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/auth";
const tokenKey = "token";

export async function login(email, password) {
  const { data: jwt } = await http.post(apiEndpoint, { email, password });

  // browsers store local storage for each domain
  // this database holds key:value pairs
  localStorage.setItem(tokenKey, jwt);
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

// if we have a current user return the decoded object otherwise return null
export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

// you don't always need to export individual functions as we defined default which
// exports all however we keep them here in case we only need to import certain
// functions in another module
export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser
};
