import CourseCard from "./CourseCard";
import styles from "../styles/HCardsSection.module.css";

function CardSection() {
  const courses = [
    {
      title: "Nivel básico",
      image: "",
      description:
        "Comienza tu viaje hacia el dominio del inglés con desde el nivel básico.",
    },
    {
      title: "Nivel intermedio",
      image: "",
      description:
        "Comienza tu viaje hacia el dominio del inglés con desde el nivel básico.",
    },
    {
      title: "Nivel avanzado",
      image: "",
      description:
        "Comienza tu viaje hacia el dominio del inglés con desde el nivel básico.",
    },
    {
      title: "Nivel negocios",
      image: "",
      description:
        "Comienza tu viaje hacia el dominio del inglés con desde el nivel básico.",
    },
  ];

  return (
    <section className={styles.mainsection}>
      <div>
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
