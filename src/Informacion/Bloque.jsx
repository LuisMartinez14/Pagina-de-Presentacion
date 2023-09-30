import React from 'react'
import { styled } from 'styled-components'
const Block = styled.div`
grid-area:1/1/2/2;
display:flex;
justify-content:right;
display:${props=>props.ver}
`
const Texto = styled.p`
font-weight:bold;
margin-left:10px;
margin-right:50px;
align-self:center;
cursor:pointer;
border-style:solid;
color:${props=>props.linea};
border-color:${props=>props.linea};
border-width:1px;
padding:20px 20px;
border-radius:50% 0 50% 0 ;
transition:1s;

`
export const Bloque = ({verte,cambio,line}) => {
  return (
    <Block ver={verte} >
<Texto linea={line} className='skills' >SKILLS</Texto>
<Texto linea={line} className='contacto' >CONTACTO</Texto>

    </Block>
  )
}
