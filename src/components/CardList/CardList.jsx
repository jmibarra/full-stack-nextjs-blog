import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Card from "../Card/Card";

const getData = async (page, cat) => {
    const res = await fetch(`http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error(res.statusText);
    }

    return res.json();
};
const CardList = async ({ page }) => {
    const data = await getData(page);
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
