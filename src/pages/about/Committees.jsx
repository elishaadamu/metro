import Navbar from "../../component/layout/Navbar";
import Footer from "../../component/layout/Footer";
import SideNav from "../../component/layout/SideNav";
import AdvisoryCommittees from "../../component/common/SelectCommittees/AdvisoryCommittees";

const Committees = () => {
  return (
    <div>
      <Navbar />
      <div className="p-4 mt-24 mx-[8%] flex flex-col md:flex-row lg:flex-row gap-4 md:gap-6 lg:gap-8">
        <div className="flex-[80%] py-8 px-4 rounded-xl md:bg-[#1e2a3a] overflow-x-hidden ">
          <h1 className="text-4xl font-bold mb-10">Committees</h1>
          <h2 className="text-2xl">Policy Committee</h2>
          <br />
          <AdvisoryCommittees />
          <div class="overflow-x-auto mt-5">
            <h3 class="mb-3 text-2xl font-semibold">Members</h3>
            <table class="min-w-full border border-gray-300">
              {/* <thead>
                <tr class="">
                  <th class="border px-4 py-2 text-left">
                    County / Organization
                  </th>
                  <th class="border px-4 py-2 text-left">Representative</th>
                </tr>
              </thead> */}
              <tbody>
                <tr>
                  <td class="border px-4 py-2">Prince George County</td>
                  <td class="border px-4 py-2">T.J. Webb (Chair)</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">Chesterfield County</td>
                  <td class="border px-4 py-2">Kevin Carroll (Vice Chair)</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">
                    Crater Planning District Commission
                  </td>
                  <td class="border px-4 py-2">Jay Ellington</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">
                    For the Secretary of Transportation
                  </td>
                  <td class="border px-4 py-2">Dale Totten, PE</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">City of Colonial Heights</td>
                  <td class="border px-4 py-2">John Wood</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">Dinwiddie County</td>
                  <td class="border px-4 py-2">Casey M. Dooley</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">City of Hopewell</td>
                  <td class="border px-4 py-2">Janice Denton</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">City of Petersburg</td>
                  <td class="border px-4 py-2">Samuel Parham</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">Petersburg Area Transit</td>
                  <td class="border px-4 py-2">Darius Mason</td>
                </tr>
              </tbody>
            </table>
          </div>
          <br />
          <AdvisoryCommittees />
        </div>
        <SideNav />
      </div>
      <Footer />
    </div>
  );
};

export default Committees;
