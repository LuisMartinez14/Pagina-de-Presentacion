import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { Info } from './Info'
import { Contac, Habilidades, Hola, Proyec } from "./Informacion/Hola"
const Banda = styled.div`
width:150px;
height:100%;
background-color:black;
color:white;
justify-content:center;
display:flex;
font-size:xx-large;
`
const Divi = styled.div`
background-color:red;
width:50px;
display:flex;
justify-content:center;
opacity:${props=>props.pre ? '1':'0.5'};
cursor:pointer;
`
const Fondo = styled.div`
width: 100vw;
height:100vh;
position:absolute;
background-color:beige;
display:flex;
overflow:hidden;
`
let climas = {
    info:' #a1b064',
    proyectos: '#04090F',
    skills : 'skyblue',
    datos: 'purple',
    contacto:'gray'
}
export const Franja = () => {
const [first, setFirst] = useState(climas.info)
const [luego,setLuego]=useState(true)
const [lin,setLin] = useState('black')
const [conten,setConten]=useState(<Hola/>)
const [ver, setVer] = useState('normal')
const [anima,setAnima] = useState(0)
let [color,setColor]=useState(true)
function cambio(e){
    let prender = luego
if(e.target.className.includes('info')&&prender===false){
  setLuego(!prender)
   
}if(e.target.className.includes('proyectos')&&prender===true){
    setLuego(!prender)

}
}   
useEffect(() => {
    document.addEventListener('click',(e)=>{
   
   if(e.target.className.includes("info")){
    setFirst(climas.info)
    setLin('black')
    setConten(<Hola/>)
    setVer('normal')
    setAnima(0)
    setColor(true)
   }else if(e.target.className.includes("skills")){
    setFirst(climas.skills)
    setLin('black')
    setConten(<Habilidades/>)
    setAnima(0)
    setColor(true)
   }else if(e.target.className.includes("proyectos")){
    setFirst(climas.proyectos)
    setLin('white')
    setConten(<Proyec cuul='white'/>)
    setVer('none')
    setAnima(30)
    setColor(true)
   }else if(e.target.className.includes("contacto")){
    setFirst(climas.contacto)
    setLin('black')
    setConten(<Contac/>)
    setAnima(0)
    setColor(false)
   }
})

}, [])

return (
    <Fondo>
    <Banda  onClick={cambio}>
<Divi className='info' pre={luego}>
I<br/>
N<br/>
F<br/>
O<br/>
R<br/>
M<br/>
A<br/>
C<br/>
I<br/>
Ó<br/>
N<br/>
</Divi>
<br />
<Divi className='proyectos' pre={!luego}>
P<br/>
R<br/>
O<br/>
Y<br/>
E<br/>
C<br/>
T<br/>
O<br/>
S<br/>
</Divi>
    </Banda>
    <Info fondo={first} lineas={lin} contenido={conten} visual={ver} anima={anima} planeta={color}/>
    </Fondo>
  )
}
