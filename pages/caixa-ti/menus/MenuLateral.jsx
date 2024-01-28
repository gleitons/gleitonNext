import Link from "next/link"
import style from "../styles/Geral.module.css"

export default function MenuLateralCaixa(props) {
    return (
        <>
        <div>
            <nav className={style.menuL}>
               {props.menu}       
            </nav>
        </div>
        </>
    )
}