import styles from "../styles/myprogress.module.css";
import { BiSearchAlt } from "react-icons/bi";
import SideBar from "@/components/SideBar";
import SideBarMobile from "@/components/SideBarMobile";
import axios from "axios";
import { useEffect, useState } from "react";
import MyProgressSection from "@/components/MyProgressSection";

interface Course {
  _id: string;
  name: string;
  numModules: number;
  numCompletedModules: number;
  Module: [];
}

function MyProgress() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const url = "https://verbify.onrender.com/api/courses";
    axios
      .get(url)
      .then((response) => setCourses(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.container__mainmyprogress}>
      <div className={styles.container__sideBar}>
        <SideBar />
      </div>
      <div className={styles.container__sideBarmobile}>
        <SideBarMobile />
      </div>
      <div className={styles.container__myprogress}>
        <header>
          <h1>Mi progreso</h1>
          <form>
            <input></input>
            <button>
              <BiSearchAlt />
            </button>
          </form>
        </header>
        <div className={styles.container___sections}>
          {courses?.map((course) => (
            <MyProgressSection
              key={course?._id}
              title={course.name}
              numModules={course.Module.length}
              numCompletedModules={0}
              Module={course?.Module}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyProgress;
