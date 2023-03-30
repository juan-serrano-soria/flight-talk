import { atom } from "jotai";

const isLoggedIn = atom(false);
const currentUserData = atom({});

export { isLoggedIn, currentUserData };
