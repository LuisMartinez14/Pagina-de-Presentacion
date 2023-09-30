import React from 'react'
import { keyframes, styled } from 'styled-components'
const Anima = keyframes`
from{transform:translateX(0)}
to{transform:translateX(100%)}
`
const Desanima = keyframes`
from{transform:translateX(0)}
to{transform:translateX(-100%)}
`
const Caja = styled.div`
overflow:hidden;
display:flex;
align-items:end;
overflow:hidden;
justify-self:${props=>props.mov};
`
const Circulo = styled.div`
width:${props=>props.ancho}rem;
height:${props=>props.ancho}rem;
clip-path: circle(50% at 50% 100%);
background-color:whitesmoke;
position:relative;
left:${props=>props.lado}px;
top:${props=>props.top}px;
`
const LadoIz = styled.div`
position:absolute;
top:40%;
animation:${Anima} 15s alternate infinite;
`
const LadoDe = styled.div`
position:absolute;
left:80%;
top:50%;
animation:${Desanima} 10s alternate infinite;
`
export const Nubes = () => {
  return (
    <>
    <LadoIz>
    <Caja mov='end' >
<Circulo top='0' ancho='3' lado='0'></Circulo>
<Circulo top='0' ancho='3.3' lado='-10'></Circulo>
<Circulo top='0' ancho='3.6' lado='-25'></Circulo>
<Circulo top='0' ancho='2' lado='-30'></Circulo>
    </Caja>
    </LadoIz>
   <LadoDe>
    <Caja  mov='left' >
<Circulo top='0' ancho='3' lado='0'></Circulo>
<Circulo top='0' ancho='3.3' lado='-10'></Circulo>
<Circulo top='0' ancho='3.6' lado='-25'></Circulo>
<Circulo top='0' ancho='2' lado='-30'></Circulo>
    </Caja>
   </LadoDe>
    </>
  )
}
