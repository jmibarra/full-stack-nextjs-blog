import Menu from "@/components/Menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";

const getData = async (slug) => {
    const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed");
    }

    return res.json();
};

const SinglePage = async ({ params }) => {
    const { slug } = params;

    const data = {
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quisquam.",
        img: "/p1.jpeg",
        user: {
            name: "John Doe",
            image: "/p1.jpeg",
        },
    };

    //await getData(slug);

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>{data?.title}</h1>
                    <div className={styles.user}>
                        {data?.user?.image && (
                            <div className={styles.userImageContainer}>
                                <Image src={data.user.image} alt="" fill className={styles.avatar} />
                            </div>
                        )}
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>{data?.user.name}</span>
                            <span className={styles.date}>01.01.2024</span>
                        </div>
                    </div>
                </div>
                {data?.img && (
                    <div className={styles.imageContainer}>
                        <Image src={data.img} alt="" fill className={styles.image} />
                    </div>
                )}
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description} dangerouslySetInnerHTML={{ __html: data?.desc }} />
                    <div className={styles.comment}>Aqui iran los comentarios</div>
                </div>
                <Menu />
            </div>
        </div>
    );
};

export default SinglePage;
