/* eslint-disable import/no-anonymous-default-export */
import { serialize } from "cookie";

const TOKEN_NAME = "token";
const MAX_AGE = 60 * 60 * 8;

function removeAuthCookies(res: any) {
  const expireConfig = {
    maxAge: 0,
    expires: new Date(Date.now() - MAX_AGE),
  };

  res.setHeader("Set-Cookie", [
    createCookie(TOKEN_NAME, "", expireConfig),
    createCookie("authed", "", expireConfig),
  ]);
}

function createCookie(name: any, data: any, options = {}) {
  return serialize(name, data, {
    maxAge: MAX_AGE,
    expires: new Date(Date.now() + MAX_AGE * 1000),
    secure: process.env.NODE_ENV === "production",
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    ...options,
  });
}

function setTokenCookie(res: any, token: any, info: any) {
    res.setHeader("Set-Cookie", [
        createCookie(TOKEN_NAME, token),
        createCookie("authed", true, { httpOnly: false }),
    ]);
    res.json(info)
}

function getAuthToken(req: any) {
  return req.cookies[TOKEN_NAME];
}

export default {
    setTokenCookie,
    removeAuthCookies,
    getAuthToken,
    createCookie,
    AUTH_TOKEN_NAME: TOKEN_NAME,
  };