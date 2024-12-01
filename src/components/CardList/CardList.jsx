import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Image from "next/image";
import Card from "../Card/Card";

const CardList = () => {
    const data = [
        {
            id: 1,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quisquam.",
            img: "/p1.jpeg",
            catSlug: "style",
            createdAt: "2023-01-01",
        },
        {
            id: 2,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quisquam.",
            img: "/p1.jpeg",
            catSlug: "food",
            createdAt: "2023-01-01",
        },
    ];
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Recent posts</h1>
            <div className={styles.posts}>
                {data?.map((item) => (
                    <Card key={item.id} item={item} />
                ))}
            </div>
            <Pagination />
        </div>
    );
};

export default CardList;
