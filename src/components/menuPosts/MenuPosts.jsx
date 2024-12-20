import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css";
import { formatDate } from "@/utils/dateUtils";

const MenuPosts = ({ withImage, MenuPosts }) => {
    return (
        <div className={styles.items}>
            {MenuPosts?.map((post) => (
                <Link href="/" className={styles.item}>
                    {withImage && (
                        <div className={styles.imageContainer}>
                            <Image src={post.img} alt="" fill className={styles.image} />
                        </div>
                    )}
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles[post.cat.slug]}`}>{post.cat.title}</span>
                        <h3 className={styles.postTitle}>{post.title}</h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>{post.user.name}</span>
                            <span className={styles.date}> - {formatDate(post.createdAt)}</span>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default MenuPosts;
