import CourseCard from "./CourseCard";

import styles from "../styles/HomeCards.module.css";
import ManGettingFolder from "../assets/ManGettingFolder.png";



function CardSection() {
  const courses = [
    {
      title: "Nivel básico",

      image: ManGettingFolder.src,

      description:
        "Comienza tu viaje hacia el dominio del inglés con desde el nivel básico.",
    },
    {
      title: "Nivel intermedio",

      image: ManGettingFolder.src,


      description:
        "Comienza tu viaje hacia el dominio del inglés con desde el nivel básico.",
    },
    {
      title: "Nivel avanzado",

      image: ManGettingFolder.src,

      description:
        "Comienza tu viaje hacia el dominio del inglés con desde el nivel básico.",
    },
    {
      title: "Nivel negocios",
      image: ManGettingFolder.src,
      description:
        "Comienza tu viaje hacia el dominio del inglés con desde el nivel básico.",
    },
  ];

  return (
    <section className={styles.mainsection}>

      <div className={styles.titlescontainer}>
        <h2 className={styles.maintitle}>Cursos de inglés</h2>
        <p className={styles.subtitle}>
          "Unlock your potential with our English learning platform and take
          your career to the next level."
        </p>
      </div>
      <div className={styles.cardscontainer}>
        {courses &&
          courses.map((elem) => {
            return (
              <CourseCard
                key={elem.title}
                title={elem.title}
                description={elem.description}
                image={elem.image}
              />
            );
          })}
      </div>
    </section>
  );
}

export default CardSection;
