import Link from "next/link"
import style from "../styles/Geral.module.css"
export default function MenuTopoCaixa() {
    return (
        <>
        <h2>CONCURSO CAIXA TI</h2>
        <div>
            <nav className={style.menuToCaixa}>
                <li>
                    <Link href="/caixa-ti/">Inicio</Link>
                </li>
                <li>
                    <Link href="/caixa-ti/materia/lingua-portuguesa">Lingua Portuguesa</Link>
                </li>
                <li>
                    <Link href="/caixa-ti/materia/matematica-financeira">Matematica Financeira</Link>
                </li>
                <li>
                    <Link href="/caixa-ti/materia/conhecimentos-bancarios">Conhecimentos Bancários</Link>
                </li>
                <li>
                    <Link href="/caixa-ti/portal-corporativo">Sistemas Operacionais</Link>
                </li>
                <li>
                    <Link href="/caixa-ti/portal-corporativo">Rede de Computadores</Link>
                </li>
                <li>
                    <Link href="/caixa-ti/materia/seguranca-da-informacao">Segurança da Informação</Link>
                </li>
                <li>
                    <Link href="/caixa-ti/materia/informatica-apostila">Apostila BB TI</Link>
                </li>
            </nav>
        </div>
        </>
    )
}