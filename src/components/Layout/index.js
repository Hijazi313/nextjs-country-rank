import Head from "next/head";

import styles from "./Layout.module.css"

import Footer from "../Footer";
import Nav from "../Nav";

export default function Layout({children, title}){
        return(
            <>
                <Head>
                    <title>{title}</title>
                    <link rel="icon" href="/favicon.ico" /> 
                </Head>
                <Nav />
                <main className={styles.container} >
                    {children}
                </main>

                <Footer />
            </>
        )
    }