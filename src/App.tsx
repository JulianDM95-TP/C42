import React from 'react'
import styled from 'styled-components'
import { Shirts } from './Components/Shirts'

export const App = () => {
    return (
        <Body>
            <Shirts />
        </Body>
    )
}

const Body = styled.div`
    background-color: rgba(76, 175, 80, 0.3);
    height: 100%;
    width: 100;
    position: relative;
top: 0px; left: 0px;
`