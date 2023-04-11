import { atom } from "jotai";

const isLoggedIn = atom(false);
const currentUserData = atom({});
const currentUserFriends = atom({});

export { isLoggedIn, currentUserData, currentUserFriends };
