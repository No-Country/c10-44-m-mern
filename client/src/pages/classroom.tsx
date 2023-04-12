import CourseDetails from "@/components/CourseDetails";
import SideBar from "@/components/SideBar";
import UnitsBox from "@/components/UnitsBox";
import VideoBox from "@/components/VideoBox";
import styles from "@/styles/ClassRoom.module.css";

const unit = {
  title: "U1: Como será estudiar en verbify",
  theme: ["Ejemplo de tema 1", "Ejemplo de tema 2", "Ejemplo de tema 3"],
};

const description = "Hola clase, Bienvenidos a la lección de hoy sobre Verbify, una plataforma innovadora para aprender y practicar inglés. Ya seas principiante o avanzado, Verbify ofrece una variedad de herramientas y recursos para ayudarte a mejorar tus habilidades lingüísticas. Durante esta clase, exploraremos las características clave de Verbify y cómo pueden beneficiar tu camino de aprendizaje del idioma. También veremos algunos ejemplos de cómo utilizar Verbify de manera efectiva para mejorar tu gramática, vocabulario y habilidades de comunicación. Al final de esta lección, tendrás una buena comprensión de lo que Verbify tiene para ofrecer y cómo puede ayudarte a alcanzar tus objetivos de aprendizaje de idiomas. ¡Así que empecemos y descubramos juntos el mundo de Verbify!"

function ClassRoom() {
  return (
    <div className={styles.all}>
      <SideBar />
      <div className={styles.top}>
        <div className={styles.mid}>
          <VideoBox videourl="https://www.youtube.com/embed/dQw4w9WgXcQ" />
          <CourseDetails title="Bienvenido a Verbify" description={description} />
        </div>
        <div className={styles.right}>
          <UnitsBox title={unit.title} themes={unit.theme} />
        </div>
      </div>
    </div>
  );
}

export default ClassRoom;
