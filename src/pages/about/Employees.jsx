import Navbar from "../../component/layout/Navbar";
import Footer from "../../component/layout/Footer";
import SideNav from "../../component/layout/SideNav";

const Employees = () => {
  return (
    <div>
      <Navbar />
      <div className="p-4 mt-24 mx-[8%] flex flex-col md:flex-row lg:flex-row gap-4 md:gap-6 lg:gap-8">
        <div className="flex-[80%] py-8 px-4 rounded-xl md:bg-[#1e2a3a] overflow-x-hidden ">
          <h1 className="text-4xl font-bold mb-10">Employees</h1>
          <p>
            The TCAMPO staff fulfill all federal and state requirements,
            enabling local member communities to utilize federal and state
            transportation funding. They offer professional planning services by
            developing the Regional Transportation Plan, which includes
            sub-plans for transit, active transportation, and the Congestion
            Management Process (CMP). Additionally, they oversee the
            administration of the Metropolitan Transportation Improvement
            Program (MTIP) and coordinate periodic Calls for Projects for
            federal funding in the region. The staff operate under the
            management of the Crater District Planning Commission’s (CPDC)
            Executive Director.
          </p>
          <h6 className="text-[20px] font-bold my-5">
            TRANSPORTATION PLANNING
          </h6>
          <li className="">
            Zakari Mumuni: Assistant Director of Transportation –
            (zmumuni@craterpdc.org){" "}
          </li>
          <li className="">
            Landon Bridges: Transportation Planner – (lbridges@craterpdc.org)
          </li>
        </div>
        <SideNav />
      </div>
      <Footer />
    </div>
  );
};

export default Employees;
