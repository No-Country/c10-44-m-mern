import CourseDetails from "@/components/CourseDetails";
import UnitsBox from "@/components/UnitsBox";
import VideoBox from "@/components/VideoBox";

const unit = {
  title: "U1: Como será estudiar en verbify",
  theme: ["Ejemplo de tema 1", "Ejemplo de tema 2", "Ejemplo de tema 3"],
};

function ClassRoom() {
  return (
    <>
      <VideoBox videourl="https://www.youtube.com/embed/dQw4w9WgXcQ" />
      <CourseDetails title="Bienvenido a Verbify" description="description" />
      <UnitsBox title={unit.title} themes={unit.theme} />
    </>
  );
}

export default ClassRoom;
