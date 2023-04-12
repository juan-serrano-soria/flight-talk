import { atom } from "jotai";

const isLoggedIn = atom(false);
const currentUserData = atom({});
const currentUserFriends = atom({});
const currentUserName = atom("");

export { isLoggedIn, currentUserData, currentUserFriends, currentUserName };
