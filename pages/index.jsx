import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HeaderCurriculo from '../components/HeaderCurriculo'
import Objetivo from '../components/Objetivo'
import { useState } from 'react'

import BaixarC from '../components/BaixarC'






export default function Home({abrirCurriculo}) {
  const closeBanner=()=>{
        
    setHomeBanner(<BaixarC closeCurriculo={closeCurriculo}/>)
 }
 const closeCurriculo =() => {
    setHomeBanner(<></>)
 }
 
 const [homeBanner,setHomeBanner]=useState(<></>)
 
  return (
    <>
    {homeBanner}
    <div className={styles.container}>
      <Head>
        <meta property="og:locale" content="pt_BR" />
        
        <meta name="author" content="Gleiton Aparecido Soares de Souza" />
       
        <meta name="keywords" content="Curriculo, programador Web, Gleiton, Gleiton Aparecido Soares de Souza" />


        <title>Gleiton Aparecido Soares de Souza - Curriculum Vitae</title>
        <meta name="description" content="Gleiton Aparecido Soares de Souza, Curricullum Vitae" />
        
        
      </Head>
      
      <div className={styles.corpoCurriculo}>
      
        < HeaderCurriculo abrirCurriculo={closeBanner}/>
        < Objetivo />
      </div>
    </div>
    </>
  )
}
