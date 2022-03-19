import React from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

export const User = () => {
    const params = useParams();
  
    return (
      <UserContainer>User: {params.userName}</UserContainer>
    )
  }
  
  const UserContainer = styled.div`
    //background-color: #36F205;
  `