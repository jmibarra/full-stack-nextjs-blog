import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.social}>
                <Image src="/facebook.png" alt="facebook" width={24} height={24} />
                <Image src="/instagram.png" alt="instagram" width={24} height={24} />
                <Image src="/youtube.png" alt="youtube" width={24} height={24} />
            </div>
            <div className={styles.logo}>Mi blog</div>
            <div className={styles.links}>
                <Link href="/">Home</Link>
                <Link href="/">About</Link>
                <Link href="/">Contact</Link>
                <Link href="/">Write</Link>
                <button>Logout</button>
            </div>
        </div>
    );
};

export default Navbar;
