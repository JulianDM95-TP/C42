import { ICollection, IUser } from "src/Interfaces";
import styled from "styled-components";

export const CollectionContent = ({
  user,
  collection,
}: {
  user: IUser
  collection: ICollection
}) => {
  return (
    <CollectionContentContainer>Usuario: {user.name} {user.lastname} Coleccion:  {collection.name}</CollectionContentContainer>
  );
};

const CollectionContentContainer = styled.div`
  background-color: #30eb1f;
`;
