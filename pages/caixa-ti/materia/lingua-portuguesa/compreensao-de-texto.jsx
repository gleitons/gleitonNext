import MenuTopoCaixa from "../../menus/MenuTopoCaixa"
import MenuLateralCaixa from "../../menus/MenuLateral"
import style from "../../styles/Geral.module.css"
import MenuLinguaPortuguesa from "./MenuLinguaPortuguesa"
export default function compreensaoDeTexto() {
    return (
        <>
             <div className={style.bbody}>
                <MenuTopoCaixa />
                <div className={style.inicial}>
                    <MenuLateralCaixa menu={<MenuLinguaPortuguesa />} />
                    <div>
                        <h3>COMPREENSÃO DE TEXTO</h3>
                        <p>O conteúdo de portais está dividido em duas partes, sendo uma delas pouco técnica e a
                            outra bastante técnica. No entanto, a recomendação é aprofundar na parte técnica apenas
                            se o assunto for cobrado no edital ou se as provas anteriores para a instituição cobraram o
                            assunto de uma maneira mais profunda.</p>
                            <embed src="./apostilas/189374-1625540943.pdf"></embed>
                    </div>
                </div>
            </div>

        </>
    )
}

