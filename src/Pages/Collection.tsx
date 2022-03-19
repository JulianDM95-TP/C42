import { useParams } from 'react-router-dom';
import styled from 'styled-components'

export const Collection = () => {
  const params = useParams();

  return (
    <CollectionContainer>Collection: {params.collectionName}</CollectionContainer>
  )
}

const CollectionContainer = styled.div`
  //background-color: #36F205;
`


