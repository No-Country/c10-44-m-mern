import React, { useState } from "react";

import { BiCaretUp, BiLock, BiLockOpen } from "react-icons/bi";
import styles from "../styles/myprogress.module.css";

interface Section {
  title: string;
  content: React.ReactNode[];
}

function MyProgressSection(props: Section) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <section>
      <div
        className={`${styles.container__section} ${
          isCollapsed ? "" : styles.collapsed
        }`}
      >
        <p>{props.title}</p>
        <button onClick={toggleCollapse}>
          {isCollapsed ? (
            <BiLock />
          ) : (
            <div className={styles.cardCourse__Count}>
              <h5>0/1</h5> <BiCaretUp />
            </div>
          )}
        </button>
      </div>
      <div className={styles.container__course}>
        {!isCollapsed &&
          props.content.map((item, index) => <p key={index}>{item}</p>)}
      </div>
    </section>
  );
}

export default MyProgressSection;
