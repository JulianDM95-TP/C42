import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserCollection } from "src/API";
import { ICollection, IUser } from "src/Interfaces";
import styled from "styled-components";
import { UserDoesNotExist } from "../User/UserDoesNotExist";
import { CollectionContent } from "./CollectionContent";
import { CollectionDoesNotExist } from "./CollectionDoesNotExist";

export const Collection = () => {
  const urlParams = useParams();

  const [collection, setCollection] = useState({} as ICollection);
  const [user, setUser] = useState({} as IUser);

  useEffect(() => {
    const username = urlParams.username!;
    const collectionName = urlParams.collectionName!;
    const [userFound, collectionFound] = getUserCollection(
      username,
      collectionName
    );
    setUser(userFound);
    setCollection(collectionFound);
    // eslint-disable-next-line
  }, []);

  const UserExistsContainer = () => {
    return (
      <>
        {collection ? (
          <CollectionContent user={user} collection={collection} />
        ) : (
          <CollectionDoesNotExist />
        )}
      </>
    );
  };

  return (
    <CollectionContainer>
      {user ? <UserExistsContainer /> : <UserDoesNotExist />}
    </CollectionContainer>
  );
};

const CollectionContainer = styled.div`
  //background-color: #36F205;
`;
