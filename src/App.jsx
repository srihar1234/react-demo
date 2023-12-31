import { Route, Routes } from "react-router-dom";
import "./App.css";
import DocDash from "./Pages/DocDash";
import DocAdd from "./Pages/DocAdd";
import DocEdit from "./Pages/DocEdit";
import { useState } from "react";
import NoPage from "./Pages/NoPage";
import StatePage from "./pages/StatePage";
import CallBackPage from "./pages/CallBackPage";

function App() {
  const data = [
    {
      doc_name: "Prashanth",
      hospital_name: "Kaveri",
      specialization: "Surgery",
      status: "Available",
    },

    {
      doc_name: "Nikhil",
      hospital_name: "Apollo",
      specialization: "Ortho",
      status: "Not Available",
    },
  ];
  const [doctorData, setDoctordata] = useState(data);

  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <DocDash doctorData={doctorData} setDoctordata={setDoctordata} />
          }
        />
        <Route
          path="/add/doc"
          element={
            <DocAdd doctorData={doctorData} setDoctordata={setDoctordata} />
          }
        />
        <Route
          path="/edit/doc/:id"
          element={
            <DocEdit doctorData={doctorData} setDoctordata={setDoctordata} />
          }
        />
          <Route
          path="/state/page"
          element={
            <StatePage />
          }
        />
           <Route
          path="/callback"
          element={
            <CallBackPage/>
          }
        />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;