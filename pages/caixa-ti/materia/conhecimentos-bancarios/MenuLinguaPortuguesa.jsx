import Link from "next/link"
export default function MenuLinguaPortuguesa() {
    return (
        <>
            <Link href="./"><li>Inicio</li></Link>
            <Link href="/caixa-ti/materia/lingua-portuguesa/portal-corporativo"><li>Portal Corporativo</li></Link>
            <Link href="/caixa-ti/materia/lingua-portuguesa/compreensao-de-texto"><li>Compreensão de Texto</li></Link>
        </>
    )
}