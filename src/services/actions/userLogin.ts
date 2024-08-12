import { FieldValues } from "react-hook-form";
import { setAccessToken } from "./setAccessToken";

export const userLogin = async (data: FieldValues) => {
  const res = await fetch(`http://localhost:5000/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    // cache: "no-store",
    credentials: "include",
  });

  const userInfo = await res.json();
  console.log(userInfo);
  if (userInfo.data.token) {
    console.log("con");
    setAccessToken(userInfo.data.token, { redirect: "/dashboard" });
  }

  return userInfo;
};
