import Link from 'next/link'
import Image from 'next/image'
import LinksMap from './LinksMap'
import styles from '../styles/HeaderCurriculo.module.css'
import { IoLogoWhatsapp } from 'react-icons/io'
import { BsFillFlagFill } from 'react-icons/bs'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { IoCallSharp } from 'react-icons/io5'
import { RiMailSendFill } from 'react-icons/ri'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { CgWebsite } from 'react-icons/cg'
import { AiFillCar } from 'react-icons/ai'
import { FaMotorcycle } from 'react-icons/fa'
import { BsFillCloudArrowDownFill } from 'react-icons/bs'
import { FaProjectDiagram } from 'react-icons/fa'
import gleiton from '/public/gleiton.jpg'

// var parte1 = []
// var parte2 = []
// var parte3 = []

// for (let i = 1; i <= 12; i++) {
//     if (i <= 4) {
//         parte1.push(`/gleiton_${i}.jpg`)
//     } else if (i > 4 && i <= 8) {
//         parte2.push(`/gleiton_${i}.jpg`)
//     } else {
//         parte3.push(`/gleiton_${i}.jpg`)
//     }

// }

const anoAt = () => {
    const anoA = new Date().getFullYear();
    return `Brasileiro, solteiro, ${anoA - 1990} anos em ${anoA}. `;
}

export default function HeaderCurriculo({ abrirCurriculo }) {
    const link = [
        {
            link: "#inicio",
            icone: < BsFillFlagFill />,
            descricao: anoAt()
        },
        {
            link: "https://goo.gl/maps/BL5Wk1CDyH4JVXGv5",
            icone: < FaMapMarkerAlt />,
            descricao: "Endereço: Rua Pirapó, 514, 001 - Bairro Igara, Canoas – RS"
        },
        {
            link: "tel:51980652808",
            icone: < IoCallSharp />,
            descricao: "Telefone: (51) 98065-2808"
        },
        {
            link: "#contato",
            icone: < RiMailSendFill />,
            descricao: "E-mail: gleiton.adm@gmail.com"
        },
        {
            link: "https://www.linkedin.com/in/gleiton/",
            icone: < AiFillLinkedin />,
            descricao: "Linkedin: linkedin.com/in/gleiton/"
        },
        {
            link: "https://github.com/gleitons",
            icone: < AiFillGithub />,
            descricao: "GitHub: github.com/gleitons"
        },
        {
            link: "https://gleiton.vercel.app",
            icone: < CgWebsite />,
            descricao: "Site: gleiton.vercel.app"
        },
        {
            link: "https://goo.gl/maps/BL5Wk1CDyH4JVXGv5",
            icone: <> < FaMotorcycle />< AiFillCar /></>,
            descricao: "CNH(Carteira de Habilitação): A/B"
        },
        {
            link: "/servicos",
            icone: < FaProjectDiagram />,
            descricao: "Veja nossos Projetos (Serviços)"
        },
        {
            link: "#",
            icone: < BsFillCloudArrowDownFill />,
            descricao: <p onClick={abrirCurriculo}>Clique aqui para baixar este currículo</p>
        },
        {
            link: "https://api.whatsapp.com/send?phone=5551980652808&text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20Gleiton Soares",
            icone: "",
            descricao: <div className={styles.stail}>
                <IoLogoWhatsapp />
                <p>Estou Online Agora - Clique Aqui</p>
            </div>
        }
    ]
    return (
        <>
            <div className={styles.cabecalho}>
                <span id='inicio'>_</span>
                <div className={styles.infoCapa}>
                    <div className={styles.fotoPerfilUm}>
                        <Image src={gleiton} alt='Gleiton' />
                    </div>
                    {/* <div className={styles.fotoPerfil}>
                        <Image src={gleiton} alt='Gleiton' />
                         <div className={styles.gleitonOne}>
                            {parte1.map((e, i) => (
                                <Image key={e} src={e} alt={"Gleiton " + i} width={95} height={126} />
                            ))}
                        </div>
                        <div className={styles.gleitonOne}>
                            {parte2.map((e, i) => (
                                <Image key={e} src={e} alt={"Gleiton " + (i + 2)} width={95} height={126} />
                            ))}
                        </div>
                        <div className={styles.gleitonOne}>
                            {parte3.map((e, i) => (
                                <Image key={e} src={e} alt={"Gleiton " + (i + 3)} width={95} height={126} />
                            ))}
                        </div>
                    </div> */}
                    <div className={styles.infoP}>
                        <h2>GLEITON APARECIDO SOARES DE SOUZA</h2>
                        <div className={styles.sociais}>
                            {link.map((e) => (
                                <LinksMap key={e.link} link={e.link} icone={e.icone} desc={e.descricao} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>


        </>

    )
}