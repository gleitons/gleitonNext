import MenuTopoCaixa from "./menus/MenuTopoCaixa"
import MenuLateralCaixa from "./menus/MenuLateral"
import style from "./styles/Geral.module.css"
import PortalCorpora from "./materia/lingua-portuguesa/portal-corporativo" 
export default function caixaTiIndex() {
    return (
        <div className={style.bbody}>
            <MenuTopoCaixa />
            <div className={style.inicial}>
            <MenuLateralCaixa  />
            <div>
                <h3>Inicio dos Estudos em xxx</h3>
            </div>
            </div>
        </div>
    )
}
