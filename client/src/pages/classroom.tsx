import UnitsBox from "@/components/UnitsBox";

const unit = {
  title: "U1: Como será estudiar en verbify",
  theme: ["Ejemplo de tema 1", "Ejemplo de tema 2", "Ejemplo de tema 3"]
}

function ClassRoom() {
  return (
    <UnitsBox title={unit.title} themes={unit.theme} />
  )
}

export default ClassRoom;
