import { IUser } from "src/Interfaces"
import styled from "styled-components"
  
  export const UserContent = ({user} : {user : IUser}) => {
    return (
      <UserContentContainer>{user.name} {user.lastname}</UserContentContainer>
    )
  }
  
  const UserContentContainer = styled.div`
    background-color: #F71E4C;
  `
  
