"use client";

import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useState } from "react";

/**
 * A fetcher function for use with the SWR hook.
 *
 * The function makes a GET request to the given url and returns the response as JSON.
 * If the response is not OK (status code 200-299), it throws an error.
 *
 * @param {string} url The url to make the request to.
 * @returns {Promise<Object>} A promise resolving to the response as JSON.
 * @throws {Error} If the response is not OK.
 */
const fetcher = async (url) => {
    const res = await fetch(url);

    const data = await res.json();

    if (!res.ok) {
        const error = new Error(data.message);
        throw error;
    }

    return data;
};

/**
 * Comments component for displaying comments on a post
 *
 * The component displays the comments section for a given post. If the user is authenticated, it displays a textarea for writing a comment and a send button. If the user is not authenticated, it displays a link to the login page.
 *
 * The component uses the SWR hook to fetch the comments from the server. It also uses the useSession hook from next-auth to check if the user is authenticated.
 *
 * The component displays the comments in a list. Each comment is rendered as a div with the user's name, date and the comment text.
 *
 * @param {string} postSlug The slug of the post the comments belong to.
 * @returns A JSX element displaying the comments.
 */
const Comments = ({ postSlug }) => {
    const { status } = useSession();

    const { data, mutate, isLoading } = useSWR(`http://localhost:3000/api/comments?postSlug=${postSlug}`, fetcher);

    const [desc, setDesc] = useState("");

    const handleSubmit = async () => {
        await fetch("/api/comments", {
            method: "POST",
            body: JSON.stringify({ desc, postSlug }),
        });
        mutate();
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Comments</h1>
            {status === "authenticated" ? (
                <div className={styles.write}>
                    <textarea placeholder="write a comment..." className={styles.input} onChange={(e) => setDesc(e.target.value)} />
                    <button className={styles.button} onClick={handleSubmit}>
                        Send
                    </button>
                </div>
            ) : (
                <Link href="/login">Login to write a comment</Link>
            )}
            <div className={styles.comments}>
                {isLoading
                    ? "loading"
                    : data?.map((item) => (
                          <div className={styles.comment} key={item._id}>
                              <div className={styles.user}>
                                  {item?.user?.image && <Image src={item.user.image} alt="" width={50} height={50} className={styles.image} />}
                                  <div className={styles.userInfo}>
                                      <span className={styles.username}>{item.user.name}</span>
                                      <span className={styles.date}>{item.createdAt}</span>
                                  </div>
                              </div>
                              <p className={styles.desc}>{item.desc}</p>
                          </div>
                      ))}
            </div>
        </div>
    );
};

export default Comments;
