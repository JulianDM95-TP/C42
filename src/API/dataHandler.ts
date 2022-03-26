import { ICollection, IUser } from "../Interfaces/Interfaces";
import { USERS_HARDCODED } from "./db_test";

export const getUser = (usernameToSearch: string): IUser => {
  const userFound = USERS_HARDCODED.filter(
    (currentUser) => currentUser.username === usernameToSearch.toLowerCase()
  ); //TODO: Connect with backend
  return userFound[0];
};

export const getUserCollection = (
  username: string,
  collectionName: string
): [IUser, ICollection] => {
  const userFound = getUser(username);
  let collectionFound: ICollection[] = [];
  if (userFound)
    collectionFound = userFound.collections.filter(
      (currentCollection) => currentCollection.name === collectionName
    );
  return [userFound, collectionFound[0]];
};

export const getCollectionThings = (
  userName: string,
  collectionName: string
) => {};
