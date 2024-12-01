import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const CategoryList = () => {
    const data = [
        { id: 1, title: "food", slug: "food", img: "/food.png" },
        { id: 2, title: "travel", slug: "travel", img: "/travel.png" },
        { id: 3, title: "culture", slug: "culture", img: "/culture.png" },
        { id: 4, title: "coding", slug: "coding", img: "/coding.png" },
        { id: 5, title: "fashion", slug: "fashion", img: "/fashion.png" },
    ];
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Popular Categories</h1>
            <div className={styles.categories}>
                {data?.map((item) => (
                    <Link href="/blog?cat=style" className={`${styles.category} ${styles[item.slug]}`} key={item._id}>
                        {item.img && <Image src={item.img} alt="" width={32} height={32} className={styles.image} />}
                        {item.title}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CategoryList;
