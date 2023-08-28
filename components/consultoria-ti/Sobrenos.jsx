import Image from 'next/image'
import styles from '../../styles/servicos.module.css'
import Maos from "../../public/img/sobre-nos-cumprimentos.jpeg"

export default function Sobrenos() {
    return (
        <>
            <div className={styles.informacaoSobre}>
                <div>
                    <Image src={Maos} />
                </div>
                <div>
                    <h3>Sobre nós</h3>
                    <p>A Futuro Consultoria é uma empresa de consultoria especializada sediada em Lagoa dos Patos, MG, Brasil. Com vasta experiência e conhecimento em consultoria, estamos comprometidos em fornecer soluções estratégicas e personalizadas para nossos clientes.</p>
                    <p>Nossa equipe de especialistas altamente qualificados trabalha em estreita colaboração com os clientes, entendendo suas necessidades e objetivos para oferecer resultados excepcionais. Nós nos orgulhamos de nossa abordagem profissional e dedicada, e estamos prontos para ajudar a impulsionar o sucesso de sua empresa.</p>
                </div>
            </div>
        </>

    )
}