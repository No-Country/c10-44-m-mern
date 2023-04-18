import React, { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getClassById } from "@/actions/classesActions";
import { useRouter } from 'next/router';
import SideBar from "@/components/SideBar";
import UnitsBox from "@/components/UnitsBox";
import VideoBox from "@/components/VideoBox";
import CourseDetails from "@/components/CourseDetails";
import styles from "@/styles/ClassRoom.module.css";

const unit = {
  title: "U1: Como será estudiar en verbify",
  theme: ["Ejemplo de tema 1", "Ejemplo de tema 2", "Ejemplo de tema 3"],
};

function ClassRoom() {
  const router = useRouter();
  const { id } = router.query;

  const dispatch = useAppDispatch();

  const fetchGetClassById = useCallback(() => {
    if (typeof id === "string") dispatch(getClassById(id));
  }, [dispatch, id]);

  useEffect(() => {
    fetchGetClassById();
  }, [fetchGetClassById]);

  const { classList } = useAppSelector((rootReducer) => rootReducer.classes);

  return (
    <div className={styles.all}>
      <div className={styles.sidebar}>
        <SideBar />
      </div>
      <div className={styles.top}>
        <div className={styles.mid}>
          <VideoBox videourl={classList?.videoURL} />
          <CourseDetails title={classList?.name} description={classList?.content} />
        </div>
        <div className={styles.right}>
          <UnitsBox title={unit.title} themes={unit.theme} />
        </div>
      </div>
    </div>
  );
};

export default ClassRoom;
