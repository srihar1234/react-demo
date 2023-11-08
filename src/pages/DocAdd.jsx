/* eslint-disable react/prop-types */
// import React from "react";
import WorkSpace from "../components/WorkSpace";
import AddDoctor from "../components/AddDoctor";

const DocAdd = ({ doctorData, setDoctordata }) => {
  return (
    <div>
      <WorkSpace>
        <AddDoctor doctorData={doctorData} setDoctordata={setDoctordata} />
      </WorkSpace>
    </div>
  );
};

export default DocAdd;