import styles from "@/styles/CourseDetails.module.css";

interface DeatilsTypes {
  title: string;
  description: string;
}

function CourseDetails({ title, description }: DeatilsTypes) {
  return (
    <section className={styles.main}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <p>Rating</p>
      </div>
      <div className={styles.divider}></div>
      <p className={styles.resources}>Recursos</p>
      <p className={styles.description}>{description}</p>
    </section>
  );
}

export default CourseDetails;
