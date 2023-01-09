import { useState } from "react"
import Teste from "../components/state/Teste"
import BaixarC from "../components/BaixarC";

export default function Estado() {
    const mudaEstado = () => {
        const cont = 0;
       
        setmEstado(<><Teste fechar={mudaEstado2} /></>)
        
    }
    const mudaEstado2 = () => {
       
       
        setmEstado(<><BaixarC /></>)
        
    }

    const [mEstado, setmEstado] = useState(<>Fechado</>)
    return (
        <>
        <h3>Vamos ao estado</h3>
        <button onClick={mudaEstado} >Mudar estado</button><br />   
        {mEstado}
        
        </>
    )
}