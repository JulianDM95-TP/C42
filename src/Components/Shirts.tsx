import React from 'react'
import styled from 'styled-components'
import { COLLECTIONS } from '../DATA/data'

export const Shirts = () => {
  return (
    <ShirtsContainer>
      <div>
        {COLLECTIONS.name}
      </div>
      <div>
        {COLLECTIONS.description}
      </div>
      <div>
        {
          COLLECTIONS.shirts.map(shirt => (
            <div>
              <div>
                Nombre: {shirt.name}
              </div>
              <div>
                Descripcion: {shirt.description}
              </div>
            </div>
          ))
        }
      </div>
    </ShirtsContainer>
  )
}

const ShirtsContainer = styled.div`
  background-color: magenta;
`