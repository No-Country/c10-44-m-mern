import UnitsBox from "@/components/UnitsBox";
import VideoBox from "@/components/VideoBox";

const unit = {
  title: "U1: Como será estudiar en verbify",
  theme: ["Ejemplo de tema 1", "Ejemplo de tema 2", "Ejemplo de tema 3"],
};

function ClassRoom() {
  return (
    <div>
      <VideoBox videourl="" />
      <UnitsBox title={unit.title} themes={unit.theme} />
    </div>
  );
}

export default ClassRoom;
