import MenuTopoCaixa from "../../menus/MenuTopoCaixa"
import MenuLateralCaixa from "../../menus/MenuLateral"
import style from "../../styles/Geral.module.css"
import MenuLinguaPortuguesa from "./MenuApostilaInfo"
export default function indexApostilaInfo() {
    return (
        <>
        <div className={style.bbody}>
            <MenuTopoCaixa />
            <div className={style.inicial}>
            <MenuLateralCaixa menu={<MenuLinguaPortuguesa />} />
            <div>
                <h3>Apostila Principal com Todos os Assuntos</h3>
                <embed src="/caixa-ti/materia/informatica-apostila/apostilas/apostila-agente-de-tecnologia-bb.pdf" type="pdf" />
            </div>
            </div>
        </div>

        </>
    )
}