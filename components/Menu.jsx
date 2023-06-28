import styles from '../styles/Home.module.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaWindowClose } from 'react-icons/fa'
import { MdMenuOpen } from 'react-icons/md'
import { IoCloseSharp } from 'react-icons/io5'
import { useState } from 'react'






export default function MenuOriginal({fecharM}) {
   
   
   

    const fechaM = () => {
        const menUU = document.querySelector('#menuI');
        menUU.style.display = 'none'
        setmEstado(<>Online fecha</>)
    }
    const abreM = () => {
        const menUU = document.querySelector('#menuI');
        menUU.style.display = 'block'
        setmEstado(<>Online fecha</>)
    }
    
    
    const [mEstado, setmEstado] = useState(<>Aquiii</>)
    return (
        <div className={styles.menuAcima}>
            
            
           <div  id='resolucao'>
           </div>
            <div className={styles.menuTop}>
                <div>
                    <a href="./">
                        <h2>Gleiton</h2>
                    </a>
                </div>
                <div>
                    <nav id='menuI'>
                    <div >
                        <IoCloseSharp className={styles.iconFechar} onClick={fechaM} />
                    </div>
                    <a href="#inicio">
                    <div className={styles.menuT}>
                   
                    </div>
                            <li>Inicio</li>
                        </a>
                        <a href="#objetivo">
                            <li>Objetivo</li>
                        </a>
                        <a href="#formacao">
                            <li>Formação</li>
                        </a>
                        <a href="#experiencia">
                            <li>Experiências Profissionais</li>
                        </a>
                        <a href="#licencas">
                            <li>Licenças e Certificados</li>
                        </a>
                        <a href="#publica">
                            <li>Publicações</li>
                        </a>
                        <a href="#projeto">
                            <li>Projetos</li>
                        </a>
                    </nav>
                    <div className={styles.menuT}>
                    <GiHamburgerMenu onClick={abreM} />
                    </div>
                   
                </div>
            </div>
        </div>
        
    )
    
}