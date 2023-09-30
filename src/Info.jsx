import { keyframes, styled } from "styled-components"
import { Nubes } from "./Informacion/Nubes"
import { Mundo } from "./Informacion/Mundo"
import { Bloque } from "./Informacion/Bloque"
import { Contac, Habilidades, Hola, Proyec } from "./Informacion/Hola"

const Animal = keyframes`
0%{background-color:#04090F;}
20%{background-color:#04090F;}
21%{background-color:white;}
22%{background-color:#04090F;}
49%{background-color:#04090F;}
50%{background-color:white;}
51%{background-color:#04090F;}
52%{background-color:white;}
53%{background-color:#04090F;}
100%{background-color:#04090F;}
`
const Todo = styled.div`
width:100%;
height:100%;
background:${props=>props.back};
display:grid;
grid-template-columns:1fr;
grid-template-rows:1fr 1fr 1fr 1fr 1fr;
box-sizing:border-box;
padding:0px 10px;
transition-property:all;
transition-duration:1.5s;
animation:${Animal} ${props=>props.animacion}s infinite;
`

export const Info = ({fondo,lineas,contenido,visual,anima,planeta}) => {
  return (
    <Todo back={fondo} animacion={anima}>
        <Bloque line={lineas} verte={visual} />
        <Nubes/>
        <Mundo color={planeta} />
        {contenido}
        
    </Todo>
  )
}
