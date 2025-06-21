import styles from "./style.module.css";
import { useSession, signIn, signOut } from 'next-auth/react';
import Link from "next/link";
import Image from "next/image";

export default function Header() {

    const { data: session, status } = useSession();

    return (

        <header className={styles.header}>
            <section className={styles.content}>
                <nav className={styles.nav}>
                    <Link href="/">
                        <h1 className={styles.logo}>
                            Tarefas<span>+</span>
                        </h1>
                    </Link>
                    { session?.user && (
                            <Link href="/dashboard" className={styles.link}>Meu Painel</Link>
                        )
                    }
                </nav>

                { status === "loading" ? (
                    <></>
                ) : session ? (
                    <div className={styles.loginButton} onClick={ () => signOut() }>
                        <Image
                            src={session?.user?.image || ""}
                            alt="Avatar"
                            width={22}
                            height={22}
                            className={styles.avatar}
                        />
                        Olá, {session?.user?.name}
                    </div>
                ) : (
                    <button className={styles.loginButton} onClick={ () => signIn() }>
                        Acessar
                    </button>
                )}
            </section>
        </header>

    );
}