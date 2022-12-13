import Link from 'next/link'
import styles from '../styles/HeaderCurriculo.module.css'
import { IoLogoWhatsapp } from 'react-icons/io'
import { RiMailOpenFill } from 'react-icons/ri'
import Gleiton from '/public/img/gleiton-aparecido-soares-de-souza.jpg'
import GleitonCinza from '/public/gleiton-cinza.jpg'
import GleitonAzul from '/public/gleiton-azul.jpg'
import GleitonClean from '/public/gleiton-clean.jpg'
import GleitonTransparente from '/public/gleiton-transparente.png'
import Image from 'next/image'
import Papel from './Papel'

// Imagens minhas

import gleiton1 from '../public/img/images/gleiton-aparecido-soares-capa/gleiton-aparecido-soares-de-souza_01.jpg'
import gleiton2 from '../public/img/images/gleiton-aparecido-soares-capa/gleiton-aparecido-soares-de-souza_02.jpg'
import gleiton3 from '../public/img/images/gleiton-aparecido-soares-capa/gleiton-aparecido-soares-de-souza_03.jpg'
import gleiton4 from '../public/img/images/gleiton-aparecido-soares-capa/gleiton-aparecido-soares-de-souza_04.jpg'


import gleiton5 from '../public/img/images/gleiton-aparecido-soares-capa/gleiton-aparecido-soares-de-souza_05.jpg'
import gleiton6 from '../public/img/images/gleiton-aparecido-soares-capa/gleiton-aparecido-soares-de-souza_06.jpg'
import gleiton7 from '../public/img/images/gleiton-aparecido-soares-capa/gleiton-aparecido-soares-de-souza_07.jpg'
import gleiton8 from '../public/img/images/gleiton-aparecido-soares-capa/gleiton-aparecido-soares-de-souza_08.jpg'


import gleiton9 from '../public/img/images/gleiton-aparecido-soares-capa/gleiton-aparecido-soares-de-souza_09.jpg'
import gleiton10 from '../public/img/images/gleiton-aparecido-soares-capa/gleiton-aparecido-soares-de-souza_10.jpg'
import gleiton11 from '../public/img/images/gleiton-aparecido-soares-capa/gleiton-aparecido-soares-de-souza_11.jpg'
import gleiton12 from '../public/img/images/gleiton-aparecido-soares-capa/gleiton-aparecido-soares-de-souza_12.jpg'








export default function HeaderCurriculo() {
    function randoImg() {
        const rando = Math.floor(4 * Math.random())
        if (rando == 0) {
            var imgPerfil = Gleiton;
        } else {
            var imgPerfil = GleitonTransparente;
        }
        return imgPerfil
    }
    return (
        <>
        
        <Papel />
       
            <div className={styles.cabecalho}>
                <div className={styles.infoCapa}>


                <div className={styles.fotoPerfil}>
                    <div className={styles.gleitonOne}>
                            <Image src={gleiton1} alt='Gleiton 1' />
                            <Image src={gleiton2} alt='Gleiton 2' />
                            <Image src={gleiton3} alt='Gleiton 3' />
                            <Image src={gleiton4} alt='Gleiton 4' />
                    </div>
                    <div className={styles.gleitonOne}>
                            <Image src={gleiton5} alt='Gleiton 5' />
                            <Image src={gleiton6} alt='Gleiton 6' />
                            <Image src={gleiton7} alt='Gleiton 7' />
                            <Image src={gleiton8} alt='Gleiton 8' />
                    </div>
                    <div className={styles.gleitonOne}>
                            <Image src={gleiton9} alt='Gleiton 9' />
                            <Image src={gleiton10} alt='Gleiton 10' />
                            <Image src={gleiton11} alt='Gleiton 11' />
                            <Image src={gleiton12} alt='Gleiton 12' />
                    </div>
                    
                   
                    </div>


                    {/* <div className={styles.fotoPerfil}>
                    <Image src= {Gleiton} alt="Gleiton Aparecido Soares de Souza" />
                    </div> */}
                    <div className={styles.infoP}>
                        <h2>GLEITON APARECIDO SOARES DE SOUZA</h2>

                        <div className={styles.sociais}>
                            <Link href="#inicio" >
                                <div className={styles.Isociais}>
                                    < RiMailOpenFill />
                                    <p>Brasileiro, solteiro, 32 anos</p>
                                </div>
                            </Link>
                            <Link href="https://goo.gl/maps/BL5Wk1CDyH4JVXGv5"
                                target="_blank">
                                <div className={styles.Isociais}>
                                    < RiMailOpenFill />
                                    <p>Endereço: Rua Pirapó, 514, 001 - Bairro Igara, Canoas – RS</p>
                                </div>
                            </Link>
                            <Link href="tel:51980652808"
                            target="_blank">
                            <div className={styles.Isociais}>
                            < RiMailOpenFill />
                                <p>Telefone: (51) 98065-2808</p>
                            </div>
                        </Link>
                        <Link href="#contato">
                            <div className={styles.Isociais}>
                            < RiMailOpenFill />
                                <p>E-mail: gleiton.adm@gmail.com</p>
                            </div>
                        </Link>
                        <Link href="https://www.linkedin.com/in/gleiton/"
                            target="_blank">
                            <div className={styles.Isociais}>
                            < RiMailOpenFill />
                                <p>Linkedin: linkedin.com/in/gleiton/</p>
                            </div>
                        </Link>
                        <Link href="https://github.com/gleitons"
                            target="_blank">
                            <div className={styles.Isociais}>
                            < RiMailOpenFill />
                                <p>GitHub: github.com/gleitons</p>
                            </div>
                        </Link>
                        <Link href="https://gleiton.com.br"
                            target="_blank">
                            <div className={styles.Isociais}>
                            < RiMailOpenFill />
                                <p>Site: gleiton.com.br</p>
                            </div>
                        </Link>
                        <Link href="https://goo.gl/maps/BL5Wk1CDyH4JVXGv5"
                            target="_blank"
                        >
                            <div className={styles.Isociais}>
                            < RiMailOpenFill />
                                <p>CNH(Carteira de Habilitação): A/B</p>
                            </div>
                        </Link>
                        <Link href=""
                            target="_blank"
                        >
                            <div className={styles.Isociais}>
                            < RiMailOpenFill />
                                <p>Clique aqui para baixar este currículo</p>
                            </div>
                        </Link>
                        <Link href="https://api.whatsapp.com/send?phone=5551980652808&text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20Gleiton Soares."
                            target="_blank">
                            <div className={styles.stail}>
                                <IoLogoWhatsapp />
                                <p>Estou Online Agora - Clique Aqui</p>
                            </div>
                        </Link>



                        </div>
                    </div>

                </div>
            </div>


        </>

    )
}