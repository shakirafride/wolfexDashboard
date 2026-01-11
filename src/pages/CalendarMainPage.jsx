import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import CalendarMainLayer from "../components/CalendarMainLayer";


const CalendarMainPage = () => {
  return (
    <>
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Calendar" />

        {/* CalendarMainLayer */}
        <CalendarMainLayer />

      </MasterLayout>
    </>
  );
};

export default CalendarMainPage;