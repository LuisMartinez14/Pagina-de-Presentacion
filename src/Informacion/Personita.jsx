import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import image from "../assets/cueva.png";

const Cuerpo = styled.div`
width:100px;
height:50px;
z-index:2;
background-repeat:no-repeat;
position:absolute;
background-size:contain;
left:${props=>props.izquierda}px;
top:${props=>props.arriba}px;
`
const Muerto = styled.div`
width:10px;
height:20px;
left:${props=>props.iz}px;
top:${props=>props.ar}px;
position:absolute;
border-radius:50% 50% 10% 10%;
background-color:#513006;
`
export const Personita = ({left,top} ) => {
let [lapiz, setLapiz] = useState(100) 
let [activar,setActivar]=useState(true)
useEffect(() => {
setTimeout(() => {
let timer = setInterval(() => {
if(lapiz===15){
    clearInterval(timer);
}else{
    setLapiz(lapiz=lapiz-0.5)
}
}, 500);    
}, 0);
 
  
}, [])


    return (
  <>
    <Cuerpo izquierda={left} arriba={top}  style={{ backgroundImage:`url(${image})` }} ></Cuerpo>
    <Muerto iz={left-lapiz} ar={top+lapiz} ></Muerto>
    <Muerto iz={left-lapiz/2} ar={top+lapiz} ></Muerto>
  </>
  )
}
