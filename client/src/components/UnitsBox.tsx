// import React from "react";
// import styles from "@/styles/UnitsBox.module.css";
// import Link from "next/link";

// interface UnitsBoxProps {
//   title: string;
//   themes: [];
// }

// function UnitsBox(props: UnitsBoxProps) {
//   const { title, themes } = props;

//   return (
//     <div className={styles.div}>
//       <div>
//         <p>{title}</p>
//       </div>
//       <hr />
//       <div className={styles.themes}>
//         {themes.map((theme, index) => (
//           <div key={index}>
//             <button>
//               <Link href={`/classroom/${theme}`}>Clase N°{index + 1}</Link>
//             </button>
//           </div>
//         ))}
//       </div>
//       <hr />
//       <div className={styles.bottom}>
//         <div className={styles.previous}>
//           <button disabled>Unidad anterior</button>
//         </div>
//         <div className={styles.next}>
//           <button disabled>Unidad siguiente</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// type Props = {
//   title: string;
//   themes: string[];
// };

// export default UnitsBox;

import React, { useState } from "react";
import styles from "@/styles/UnitsBox.module.css";
import Link from "next/link";

interface UnitsBoxProps {
  title: string;
  themes: string[];
  classId: string;
}

function UnitsBox(props: UnitsBoxProps) {
  const { title, themes } = props;
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const goToPreviousVideo = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
    }
  };

  const goToNextVideo = () => {
    if (currentVideoIndex < themes.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    }
  };

  return (
    <div className={styles.div}>
      <div>
        <p>{title}</p>
      </div>
      <hr />
      <div className={styles.themes}>
        {themes.map((theme, index) => (
          <div key={index}>
            <button>
              <Link
                href={`/classroom/${theme}${
                  index === currentVideoIndex ? `?autoplay=true` : ``
                }`}
              >
                {`Clase N°${index + 1}`}
              </Link>
            </button>
          </div>
        ))}
      </div>
      <hr />
      <div className={styles.bottom}>
        <div className={styles.previous}>
          <button
            onClick={goToPreviousVideo}
            disabled={currentVideoIndex === 0}
          >
            Unidad anterior
          </button>
        </div>
        <div className={styles.next}>
          <button
            onClick={goToNextVideo}
            disabled={currentVideoIndex === themes.length - 1}
          >
            Unidad siguiente
          </button>
        </div>
      </div>
    </div>
  );
}

export default UnitsBox;
