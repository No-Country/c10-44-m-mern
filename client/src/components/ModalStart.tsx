import styles from "@/styles/ModalStartNow.module.css";
import Reading from "../assets/Reading.png";
import { BiX } from "react-icons/bi";
import { useState } from "react";

function ModalStartNow() {
  const [showModal, setShowModal] = useState(true);

  function hideModal() {
    setShowModal(false);
  }
  return (
    <>
      {showModal && (
        <div
          className={styles.container_ModalStartNow}
          onClick={() => hideModal()}
        >
          <form onClick={(e) => e.stopPropagation()}>
            <div className={styles.close} onClick={() => hideModal()}>
              <BiX />
            </div>
            <img src={Reading.src} alt="Reading" />
            <p>
              ¡Hola! ¿Estás buscando mejorar tu nivel de inglés? ¡Tenemos la
              solución perfecta para ti! Te invitamos a acceder a nuestra clase
              gratuita de inglés,donde podrás conocer nuestra metodología y la
              calidad de nuestros contenidos.
            </p>
            <button className={styles.button_start}>Empezar ahora</button>
            <button className={styles.button_later} onClick={() => hideModal()}>
              Tal vez despues
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default ModalStartNow;
