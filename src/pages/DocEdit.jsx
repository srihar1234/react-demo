/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import EditDoctor from "../components/EditDoctor";
import WorkSpace from "../components/WorkSpace";

const DocEdit = ({ doctorData, setDoctordata }) => {
  const { id } = useParams();
  return (
    <WorkSpace>
      <EditDoctor
        doctorData={doctorData}
        setDoctordata={setDoctordata}
        editId={id}
      />
    </WorkSpace>
  );
};

export default DocEdit;