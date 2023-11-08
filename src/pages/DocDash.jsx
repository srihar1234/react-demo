/* eslint-disable react/prop-types */
// import React from "react";
import WorkSpace from "../components/WorkSpace";
import Main from "../components/Main";

const DocDash = ({ doctorData, setDoctordata }) => {
  return (
    <WorkSpace>
      <Main doctorData={doctorData} setDoctordata={setDoctordata} />
    </WorkSpace>
  );
};

export default DocDash;