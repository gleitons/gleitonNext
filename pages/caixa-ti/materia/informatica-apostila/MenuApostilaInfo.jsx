import Link from "next/link"
export default function MenuApostilaInfo() {
    return (
        <>  
            <li>Apostila Informática</li>
            <Link href="./"><li>Inicio</li></Link>
            <Link href="/caixa-ti/materia/informatica-apostila/portugues"><li>Português</li></Link>
            <Link href="/caixa-ti/materia/lingua-portuguesa/compreensao-de-texto"><li>Compreensão de Texto</li></Link>
        </>
    )
}