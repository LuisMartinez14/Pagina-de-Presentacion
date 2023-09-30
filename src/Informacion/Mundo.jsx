import React, { useContext, useEffect, useRef, useState } from 'react'
import { styled } from 'styled-components'
import { Personita } from './Personita'
const Cubre = styled.div`
grid-area:3/1/6/2;
display:flex;
z-index:20;
@media(max-width:700px){
  display:none;
}
`
const Circulos = styled.section`
width:${props=>props.anchura}%;
height:${props=>props.anchura}%;
background-color:${props=>props.cool};
display:flex;
align-self:end;
position:absolute;
clip-path: circle(50% at 50% 100%);
transform:translateX(${props=>props.equis}px)
translateY(${props=>props.ye}px);
`
const Lado = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:center;
`
export const Mundo = ({color}) => {
const datos = useRef() 
let [primero,setPrimero]=useState()
let [segundo,setSegundo]=useState()

useEffect(() => {
let puntoY =datos.current.offsetTop;
let puntoX =datos.current.offsetLeft;
let puntoW =datos.current.offsetWidth;
let puntoH =datos.current.offsetHeight;
let posicionX = puntoX ;
let posicionY = puntoY + puntoH/2 - 10;
setPrimero(posicionX)
setSegundo(posicionY)
}, [])

  return (
  <>
    <Cubre>
   <Lado >
    <Circulos ye='-40' equis='0'  cool={color===true ? '#005200' :'white'} anchura='50'></Circulos>
    <Circulos ye='0' equis='150'  cool={color ===true?'#007000':'#C6C6C6'} anchura='40'></Circulos>
    <Circulos ref={datos}  ye='0' equis='-150' cool={color===true?'#4ea93b':'#919191'} anchura='40'>
    </Circulos>
        <Personita
        left={primero}
        top={segundo}
        />
   </Lado>
    
    </Cubre>
  </>
  )
}
