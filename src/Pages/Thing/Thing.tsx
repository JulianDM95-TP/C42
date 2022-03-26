import { useParams } from 'react-router-dom';
import styled from 'styled-components';

export const Thing = () => {
  const params = useParams();

  return (
    <ThingContainer>Thing: {params.thingName}</ThingContainer>
  )
}

const ThingContainer = styled.div`
  //background-color: #36F205;
`


