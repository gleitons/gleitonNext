import MenuTopoCaixa from "../menus/MenuTopoCaixa"
import MenuLateralCaixa from "../menus/MenuLateral"
import style from "../styles/Geral.module.css"

export default function caixaTiIndex() {
    return (
        <div className={style.bbody}>
            <MenuTopoCaixa />
            <div className={style.inicial}>
            <MenuLateralCaixa  />
            <div>
                <h3>INÍCIO GERAL</h3>
            </div>
            </div>
        </div>
    )
}
