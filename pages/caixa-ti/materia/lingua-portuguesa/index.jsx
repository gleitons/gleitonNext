import MenuTopoCaixa from "../../menus/MenuTopoCaixa"
import MenuLateralCaixa from "../../menus/MenuLateral"
import style from "../../styles/Geral.module.css"
import MenuLinguaPortuguesa from "./MenuLinguaPortuguesa"
export default function indexLinguaPortuguesa() {
    return (
        <>
        <div className={style.bbody}>
            <MenuTopoCaixa />
            <div className={style.inicial}>
            <MenuLateralCaixa menu={<MenuLinguaPortuguesa />} />
            <div>
                <h3>Inicio dos Estudos em xxx</h3>
            </div>
            </div>
        </div>

        </>
    )
}