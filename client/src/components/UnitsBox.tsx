import React from "react";
import styles from "@/styles/UnitsBox.module.css";

interface BoxProps {
  moduleID: string;
  title: string;
  themes: [];
}

function UnitsBox(props: BoxProps) {
  const { title, themes } = props;

  return (
    <div className={styles.div}>
      <div>
        <p>{title}</p>
      </div>
      <hr />
      <div className={styles.themes}>
        {themes.map((theme, index) => (
          <div key={index}>
            <button>Clase {index}</button>
          </div>
        ))}
      </div>
      <hr />
      <div className={styles.bottom}>
        <div className={styles.previous}>
          <button disabled>Unidad anterior</button>
        </div>
        <div className={styles.next}>
          <button disabled>Unidad siguiente</button>
        </div>
      </div>
    </div>
  );
}

type Props = {
  title: string;
  themes: string[];
};

export default UnitsBox;
