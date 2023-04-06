//Importación hoja de estilos
import styles from '../styles/myprogress.module.css';
//Importacion de Iconos
import { BiCaretRightCircle, BiCaretUp, BiCheckCircle, BiHappyHeartEyes, BiPlay, BiSearchAlt } from 'react-icons/bi';
import MyProgressSection from '@/components/MyProgressSection';
import SideBar from '@/components/SideBar';


function MyProgress() {
  return (
    <div className={styles.container__main}>
      <div>
        <SideBar />
      </div>
      <div className={styles.container__myprogress}>
        <header>
          <h1>Mi progreso</h1>
          <form>
            <input></input>
            <button><BiSearchAlt /></button>
          </form>
        </header>
        <div className={styles.container___sections}>
          <MyProgressSection title="Introducción " content={[
            <>
              <div className={styles.container__courseH1}> <BiHappyHeartEyes /> Bienvenida a Verbify (clase 1) <BiCaretRightCircle /> <BiCheckCircle /> <BiCaretUp /></div>
              <hr className={styles.line__divisition} />
              "U1: Como será estudiar en Verbify."
              <div><BiPlay /> Ejemplo 1</div>
              <div><BiPlay /> Ejemplo 2</div>
              <div><BiPlay /> Ejemplo 3</div>
            </>
          ]} />

          <MyProgressSection title="Ingles Basico" content={[
            <>
              <div className={styles.container__courseH1}> <BiHappyHeartEyes /> Bienvenida a Verbify (clase 1) <BiCaretRightCircle /> <BiCheckCircle /> <BiCaretUp /></div>
              <hr className={styles.line__divisition} />
              "U1: Como será estudiar en Verbify."
              <div><button><BiPlay /></button> Ejemplo 1</div>
              <div><button><BiPlay /></button> Ejemplo 2</div>
              <div><button><BiPlay /></button> Ejemplo 3</div>
            </>]} />

          <MyProgressSection title="Ingles Intermedio" content={[
            <>
              <div className={styles.container__courseH1}> <BiHappyHeartEyes /> Bienvenida a Verbify (clase 1) <BiCaretRightCircle /> <BiCheckCircle /> <BiCaretUp /></div>
              <hr className={styles.line__divisition} />
              "U1: Como será estudiar en Verbify."
              <div><BiPlay /> Ejemplo 1</div>
              <div><BiPlay /> Ejemplo 2</div>
              <div><BiPlay /> Ejemplo 3</div>
            </>]} />

          <MyProgressSection title="Ingles Avanzado" content={[
            <>
              <div className={styles.container__courseH1}> <BiHappyHeartEyes /> Bienvenida a Verbify (clase 1) <BiCaretRightCircle /> <BiCheckCircle /> <BiCaretUp /></div>
              <hr className={styles.line__divisition} />
              "U1: Como será estudiar en Verbify."
              <div><BiPlay /> Ejemplo 1</div>
              <div><BiPlay /> Ejemplo 2</div>
              <div><BiPlay /> Ejemplo 3</div>
            </>]} />

          <MyProgressSection title="Ingles de Negocios" content={[
            <>
              <div className={styles.container__courseH1}> <BiHappyHeartEyes /> Bienvenida a Verbify (clase 1) <BiCaretRightCircle /> <BiCheckCircle /> <BiCaretUp /></div>
              <hr className={styles.line__divisition} />
              "U1: Como será estudiar en Verbify."
              <div><BiPlay /> Ejemplo 1</div>
              <div><BiPlay /> Ejemplo 2</div>
              <div><BiPlay /> Ejemplo 3</div>
            </>]} />

        </div>
      </div>
    </div>
  );
}

export default MyProgress;
