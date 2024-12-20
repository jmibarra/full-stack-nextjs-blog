import React from "react";
import styles from "./menu.module.css";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";

/**
 * Fetches most popular posts from the server.
 *
 * @param {number} page The page to fetch.
 * @param {string} [cat] The category to filter by.
 * @returns {Promise<Object>} A promise resolving to the response as JSON.
 * @throws {Error} If the response is not OK.
 */
const getMostPopularPosts = async (page, cat) => {
    const res = await fetch(`http://localhost:3000/api/posts/most-popular`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error(res.statusText);
    }

    return res.json();
};

const Menu = async () => {
    const { posts: mostPopularPosts, count } = await getMostPopularPosts();
    return (
        <div className={styles.container}>
            <h2 className={styles.subtitle}>{"What's hot"}</h2>
            <h1 className={styles.title}>Most Popular</h1>
            <MenuPosts withImage={false} MenuPosts={mostPopularPosts} />
            <h2 className={styles.subtitle}>Discover by topic</h2>
            <h1 className={styles.title}>Categories</h1>
            <MenuCategories />
            <h2 className={styles.subtitle}>Chosen by the editor</h2>
            <h1 className={styles.title}>Editors Pick</h1>
            <MenuPosts withImage={true} />
        </div>
    );
};

export default Menu;
