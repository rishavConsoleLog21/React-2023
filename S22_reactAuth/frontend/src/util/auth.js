import { redirect } from "react-router-dom";

export function getTokenDuration() {
  const storeExpirationDate = localStorage.getItem("expiration");
  const expirationDate = new Date(storeExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
}

export function getAuthToken() {
  const token = localStorage.getItem("token");

  if (!token) {
    return null;
  }

  const tokenDuratoin = getTokenDuration();

  if (tokenDuratoin <= 0) {
    return "EXPIRED";
  }

  return token;
}

export function tokenLoader() {
  return getAuthToken();
}

export function checkToken() {
  const token = getAuthToken();

  if (!token) {
    return redirect("/auth");
  }
  return null;
}
