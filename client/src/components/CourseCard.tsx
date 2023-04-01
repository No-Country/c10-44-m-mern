import { Course } from "../../types.d";
import styles from "../styles/Card.module.css";

function CourseCard({ title, description, image }: Course) {
  return (
    <div className={styles.container}>
      <figure className={styles.imagecontainer}>
        <img src={image} className={styles.image} alt={title} />
      </figure>

      <div className={styles.imagecontainer}>
        <img src={image} className={styles.image} alt={title} />
      </div>
    </div>
  );
}

export default CourseCard;
