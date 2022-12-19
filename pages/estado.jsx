import { useState } from "react"
import Teste from "../components/state/Teste"

export default function Estado() {
    const mudaEstado = () => {
        const cont = 0;
       
        setmEstado(<><Teste fechar={mudaEstado2} /></>)
        
    }
    const mudaEstado2 = () => {
       
       
        setmEstado(<></>)
        
    }

    const [mEstado, setmEstado] = useState(<>Estado1 </>)
    return (
        <>
        <h3>Vamos ao estado</h3>
        <button onClick={mudaEstado} >Mudar estado</button><br />   
        {mEstado}
        
        </>
    )
}