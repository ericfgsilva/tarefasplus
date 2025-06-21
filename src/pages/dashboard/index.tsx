import { GetServerSideProps } from "next";
import styles from "./style.module.css";
import Head from "next/head";
import TextArea from '../../components/textarea';

import { getSession } from 'next-auth/react';

export default function Dashboard(){
    return (
        <div className={styles.container}>
            <Head>
                <title>Meu painel de tarefas</title>
            </Head>

            <main className={styles.main}>
                <section className={styles.content}>
                    <div className={styles.contentForm}>
                        <h1 className={styles.title}>Qual sua tarefa?</h1>
                        
                        <form>
                            <TextArea placeholder="Digite sua tarefa aqui..." />
                            <div className={styles.checkboxArea}>
                                <input 
                                    id="isPublic"
                                    type="checkbox" 
                                    className={styles.checkbox} 
                                />
                                <label htmlFor="isPublic">Deixar tarefa pública?</label>
                            </div>
                            <button className={styles.button} type="submit">Registrar Tarefa</button>
                        </form>
                    </div>
                </section>
            </main>

        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {

    const session = await getSession({ req });

    if(!session?.user) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }

    return {
        props: {},
    };
};