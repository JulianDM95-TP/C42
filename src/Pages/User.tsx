import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getUserData } from "../API/dataHandler";
import { IUser } from "../Interfaces/Interfaces";

export const User = () => {
  const [user, setUser] = useState({} as IUser);

  useEffect(() => {
    setUser(getUserData(params.userName || ""));
  }, []);

  const params = useParams();

  return (
    <UserContainer>
      {user ? (
        <div>
          Fullname: {user.name} {user.lastname}
        </div>
      ) : (
        <h1>No existe el usario</h1>
      )}
    </UserContainer>
  );
};

const UserContainer = styled.div`
  //background-color: #36F205;
`;
