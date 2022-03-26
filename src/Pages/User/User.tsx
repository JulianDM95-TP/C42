import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "src/API";
import { IUser } from "src/Interfaces";
import styled from "styled-components";
import { UserContent } from "./UserContent";
import { UserDoesNotExist } from "./UserDoesNotExist";

export const User = () => {
  const urlParams = useParams();

  const [user, setUser] = useState({} as IUser);

  useEffect(() => {
    setUser(getUser(urlParams.username!));
    // eslint-disable-next-line
  }, []);


  return (
    <UserContainer>
      {user ? <UserContent user={user}  /> : <UserDoesNotExist />}
    </UserContainer>
  );
};

const UserContainer = styled.div`
  //background-color: #36F205;
`;
