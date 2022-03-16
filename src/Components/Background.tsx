import styled from 'styled-components'

export const Background = (
    {
        children
    }: {
        children: any
    }
) => {
    return (
        <>
        <BackgroundContainer>PRETEXTO {children} POSTEXTO</BackgroundContainer>
        </>
    )
}

const BackgroundContainer = styled.div`
  background-color: red;
  height: 100vh;
  width: 100vw;
  position: absolute;
`



