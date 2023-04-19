import React, { useEffect, useState } from "react";
import axios from "axios";
import { BiCaretRightCircle } from "react-icons/bi";
import styles from "../styles/myprogress.module.css";

interface ClassData {
  _id: string;
  name: string;
  content: string;
  // otros campos que necesites
}

interface CardClassesProps {
  id: string;
  classes: string[];
}

function CardClasses(props: CardClassesProps) {
  const [classData, setClassData] = useState<ClassData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const promises = props.classes.map((classId: string) => {
        return axios.get(`https://verbify.onrender.com/api/classes/${classId}`);
      });
      const results = await Promise.all(promises);
      const classes = results.map((res) => res.data);
      setClassData(classes);
    };
    fetchData();
  }, [props.classes]);

  return (
    <div className={styles.card_class}>
      {classData?.map((classInfo) => (
        <div key={classInfo?._id}>
          {classInfo?.name !== null && classInfo?.name.length > 0 && (
            <h4>{classInfo?.name}</h4>
          )}
          {classInfo?.content !== null && classInfo?.name.length > 0 && <hr />}
          {classInfo?.content !== null && classInfo?.content.length > 0 && (
            <p>
              <BiCaretRightCircle />
              {classInfo?.content}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
export default CardClasses;
