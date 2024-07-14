import { authKey } from "@/constants/authKey";
import { decodedToken } from "@/utils/jwtDecode";

import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from "@/utils/local-storage";

export const storeUserInfo = (token: any) => {
  return setToLocalStorage(authKey, token);
};
export const getUserInfo = () => {
  const authToken = getFromLocalStorage(authKey);
  if (authToken) {
    const decoded: any = decodedToken(authToken);

    return {
      ...decoded,
      role: decoded?.role.toLowerCase(),
    };
  }
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey);

  if (authToken) {
    return !!authToken;
  }
};
export const removedUser = () => {
  return removeFromLocalStorage(authKey);
};
