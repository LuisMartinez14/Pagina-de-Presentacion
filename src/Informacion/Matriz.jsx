import React, { useState } from 'react'
import { styled } from 'styled-components'
import michi from '../assets/imagenes/michi.png'
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
const Prueba = styled.div`
width:100%;
height:100%;
z-index:40;
display:flex;
box-sizing:border-box;
justify-content:space-around;
align-items:center;
margin-top:20px;
`
const Izquierda = styled.button`
width:50px;
height:50px;
border-radius:50%;
background-color:black;
border-style:solid;
border-color:white;
cursor:pointer;

`
const Derecha = styled(Izquierda)`

`
const Contenido = styled.div`
width:90%;
height:100%;
background-image:url(${props=>props.back});
background-size:contain;
background-position:center;
display:flex;
justify-content:center;
overflow:hidden;
`
const ArrayImagen = [ {
  foto:'dragon',
  fondo:'../src/assets/imagenes/dragon fondo.jpg'
},
{
  foto:'',
  fondo:'../src/assets/imagenes/michi fondo.jpg'
},
 {
  foto:'rick',
  fondo:'../src/assets/imagenes/rick fondo.jpg'
}
]
export const Matriz = () => {
const [mostra,setMostra] = useState(ArrayImagen[0].fondo)
const [fon,setFon] = useState(ArrayImagen[0].foto)
function derecha(){
  ArrayImagen.push(ArrayImagen[0]);
  ArrayImagen.shift();
  console.log(ArrayImagen)
setMostra(ArrayImagen[0].fondo);
setFon(ArrayImagen[0].foto);
}
function izquierda(){
  let ultimo = ArrayImagen.length;
  console.log(ultimo)
 ArrayImagen.unshift(ArrayImagen[ultimo-1]);
 ArrayImagen.pop();
 console.log(ArrayImagen);
setMostra(ArrayImagen[0].fondo);
setFon(ArrayImagen[0].foto);
}
    return (
      <>
    <Prueba >
    <Izquierda onClick={izquierda}><AiOutlineLeft size='100%' color='white'/> </Izquierda>
    <Contenido back={`'${mostra}'`} >
    <img src={`../src/assets/imagenes/${fon}.png`} width='200'  alt="" />
    </Contenido>
    <Derecha onClick={derecha} ><AiOutlineRight size='100%' color='white'/> </Derecha>
     </Prueba>
      </>
  )
}
