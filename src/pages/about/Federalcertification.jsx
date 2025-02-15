import Navbar from "../../component/layout/Navbar";
import Footer from "../../component/layout/Footer";
import SideNav from "../../component/layout/SideNav";

const FederalCertification = () => {
  return (
    <div>
      <Navbar />
      <div className="p-4 mt-24 mx-[8%] flex flex-col md:flex-row lg:flex-row gap-4 md:gap-6 lg:gap-8">
        <div className="break-words whitespace-normal flex-[80%] py-8 px-4 rounded-xl md:bg-[#1e2a3a] overflow-x-hidden">
          <h1 className="text-4xl font-bold mb-10">Federal Certification</h1>
          <p className="mb-5">
            Every four years, the Federal Highway Administration and the Federal
            Transit Administration evaluate TCAMPO's planning processes to
            ensure compliance with federal requirements. This certification
            review assesses planning procedures, public outreach efforts, and
            other key aspects.
          </p>
          <p>
            The most recent <strong>Federal Certification Review</strong> was
            conducted in 2022.
          </p>
          <li className="font-bold my-4">
            <a
              href="https://nmcdn.io/e186d21f8c7946a19faed23c3da2f0da/8bfec28a290449a7b10eb1fee3a0e264/files/about-us/federal-certification/CAMPO-Final-Certification-Review-Report-06-2021.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-500 text-sky-200  "
            >
              2022 Certification Review Report
            </a>
          </li>

          <p className="ml-[24px]">
            <a
              className="hover:text-sky-500 text-sky-200 "
              target="_blank"
              rel="noopener noreferrer"
              href="https://craterpdc.org/DocumentLibrary/Transportation/Documents/FINAL_DRAFT_2021_TCAMPO_Certification_Report_04.22.22.pdf"
            >
              https://craterpdc.org/DocumentLibrary/Transportation/Documents/FINAL_DRAFT_2021_TCAMPO_Certification_Report_04.22.22.pdf
            </a>
          </p>
        </div>
        <SideNav />
      </div>
      <Footer />
    </div>
  );
};

export default FederalCertification;
