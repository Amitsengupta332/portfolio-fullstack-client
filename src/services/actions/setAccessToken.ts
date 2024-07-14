"use server";
import { redirect } from "next/navigation";

import { cookies } from "next/headers";
import { authKey } from "@/constants/authKey";

export const setAccessToken = (token: string, option?: any) => {
  cookies().set(authKey, token);
  if (option && option.redirect) {
    redirect(option.redirect);
  }
};
