import type { NextPage } from 'next'
import {Header} from "../../components/Header/Header";
import styles from "../../styles/home.module.css";
import Head from "next/head";

const home: NextPage = () => {
    return(
        <div className={ styles.container }>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={ styles.main }>
                <Header />
            </main>
        </div>
    )
}

export default home