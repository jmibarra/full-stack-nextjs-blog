import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b className={styles.bold}>Hola!,</b> Bienvenido a mi blog
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt="" layout="fill" objectFit="cover" fill />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                    <p className={styles.postDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quisquam.</p>
                    <button className={styles.button}>Read more</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
