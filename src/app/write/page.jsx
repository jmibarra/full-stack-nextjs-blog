import styles from "./write.module.css";

const page = () => {
    return (
        <div className={styles.container}>
            <input type="text" placeholder="Title" className={styles.input} />
            <div className={styles.editor}></div>
        </div>
    );
};

export default page;
