import Head from "next/head"
import Script from 'next/script'
import { Children } from "react"

export default function Analytcs({ children }) {
    return (
        <>  
            <Head>
               
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-WYB2K3F9CQ"></script>
                <script>
                    {`window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-WYB2K3F9CQ');`}
                </script>
            </Head>
           
            <div>{children}</div>
        </>
    )
}