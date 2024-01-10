"use client";
import { Logo } from "@/components/Logo";
import styles from "./auth.module.scss";
import React, { useState } from 'react'
import { useRouter } from "next/router";

export const AuthView = () => {
    const router = useRouter();
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [show, setShow] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push("/dashboard");
    }

    return (
        <section className={styles.layout}>
            <div className={styles.imageContainer}>
                <Logo />
                <section className={styles.container}>
                    <img src="/asset/png/signupImg.png" alt="signup-img" />
                </section>
            </div>
            <div className={styles.loginContainer}>
                <div className={styles["loginContainer--mobileLogo"]}><Logo /></div>
                <section className={styles.container}>
                    <section className={styles.textContainer}>
                        <h3>Welcome!</h3>
                        <p>Enter details to login.</p>
                    </section>
                    <form onSubmit={handleSubmit} className={styles.formContainer}>
                        <section className={styles.input}>
                            <input style={{ width: "100%" }} value={email} onChange={(e) => setEmail(e.target.value)} name="email" type="text" placeholder="Email" />

                        </section>
                        <section className={styles.input}>
                            <input style={{ width: "80%" }} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" type={show ? "text" : "password"} />
                            <button onClick={(e) => {
                                e.preventDefault();
                                setShow(!show)
                            }}>show</button>
                        </section>
                        <p className={styles.pwdReset}>Forgot password</p>
                        <section className={styles.loginBtn}>
                            <button onClick={() => router.push("/dashboard")}>Login</button>
                        </section>
                    </form>

                </section>
            </div>
        </section>
    )
}