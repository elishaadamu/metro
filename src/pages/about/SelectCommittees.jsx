import Navbar from "../../component/layout/Navbar";
import Footer from "../../component/layout/Footer";
import SideNavCommittees from "../../component/layout/SideNav";
import AdvisoryCommittees from "../../component/common/SelectCommittees/AdvisoryCommittees";
import BicyclePedestrianAdvisoryCommittees from "../../component/common/SelectCommittees/BicyclePedestrianAdvisoryCommittees";
import InterAgencyConsultationGroup from "../../component/common/SelectCommittees/InterAgencyConsultationGroup";
import PublicInvolvementPlanAdvisoryCommittees from "../../component/common/SelectCommittees/PublicInvolvementPlanAdvisoryCommittees";
import TransportationPlanningCommittees from "../../component/common/SelectCommittees/TransportationPlanningCommittees";
import WaterResourcesCommittees from "../../component/common/SelectCommittees/WaterResourcesCommittees";
import { useState } from "react";

const SelectCommittees = () => {
  const committees = [
    { title: "Advisory Committees", id: "AdvisoryCommittees" },
    {
      title: "Bicycle Pedestrian Advisory Committees",
      id: "BicyclePedestrianAdvisoryCommittees",
    },
    {
      title: "InterAgency Consultation Group",
      id: "InterAgencyConsultationGroup",
    },
    {
      title: "Public Involvement Plan Advisory Committees",
      id: "PublicInvolvementPlanAdvisoryCommittees",
    },
    {
      title: "Transportation Planning Committees",
      id: "TransportationPlanningCommittees",
    },
    { title: "Water Resources Committees", id: "WaterResourcesCommittees" },
  ];
  const [selected, setSelected] = useState("");

  const handleSelect = (e) => {
    const sectionId = e.target.value;
    setSelected(sectionId);
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        window.history.pushState(null, null, `#${sectionId}`);
        window.scrollTo({
          top: element.offsetTop - 100, // Adjust the offset as needed
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div className="p-4 mt-12 mx-[8%] flex flex-col md:flex-row lg:flex-row gap-4 md:gap-6 lg:gap-8">
        <div className="flex-[80%] py-8 px-4 rounded-xl md:bg-[#1e2a3a] overflow-x-hidden ">
          <h1 className="text-4xl font-bold mb-10 text-center">Committees</h1>
          <div className="p-4">
            <label
              htmlFor="committeeSelect"
              className="block font-semibold mb-2"
            >
              Select a Committee:
            </label>
            <select
              id="committeeSelect"
              value={selected}
              onChange={handleSelect}
              className="border bg-black text-amber-50 p-2 rounded w-full cursor-pointer"
            >
              <option value="">-- Choose a Committee --</option>
              {committees.map((committee) => (
                <option key={committee.id} value={committee.id}>
                  {committee.title}
                </option>
              ))}
            </select>
          </div>
          <div id="AdvisoryCommittees">
            <AdvisoryCommittees />
          </div>
          <br />
          <div id="BicyclePedestrianAdvisoryCommittees">
            <BicyclePedestrianAdvisoryCommittees />
          </div>
          <br />
          <div id="InterAgencyConsultationGroup">
            <InterAgencyConsultationGroup />
          </div>
          <br />
          <div id="PublicInvolvementPlanAdvisoryCommittees">
            <PublicInvolvementPlanAdvisoryCommittees />
          </div>
          <br />
          <div id="TransportationPlanningCommittees">
            <TransportationPlanningCommittees />
          </div>
          <br />
          <div id="WaterResourcesCommittees">
            <WaterResourcesCommittees />
          </div>
        </div>
        <SideNavCommittees />
      </div>
      <Footer />
    </div>
  );
};

export default SelectCommittees;
