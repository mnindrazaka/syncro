import AsyncStorage from "@react-native-community/async-storage";
import jwtDecode from "jwt-decode";
import { UserLoginResponse } from "./userActions";

const key = "token";

const saveToken = (token: string) => {
  return AsyncStorage.setItem(key, token);
};

const removeToken = () => {
  return AsyncStorage.removeItem(key);
};

const getToken = () => {
  return AsyncStorage.getItem(key);
};

const getUser = async () => {
  const token = await getToken();
  if (!token) return;
  return jwtDecode(token) as UserLoginResponse;
};

export default {
  saveToken,
  removeToken,
  getToken,
  getUser
};
