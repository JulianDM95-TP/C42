import { IUser } from "../Interfaces/Interfaces";
import { USERS_HARDCODED } from "./data";

export const getUserData = (usernameToSearch: string) : IUser => {
  const userFound = USERS_HARDCODED.filter( currentUser => currentUser.username === usernameToSearch.toLowerCase() ); //TODO: Connect with backend
  return userFound[0];
};

export const getUserCollections = (userName: string) => {};

export const getCollectionThings = (
  userName: string,
  collectionName: string
) => {};
