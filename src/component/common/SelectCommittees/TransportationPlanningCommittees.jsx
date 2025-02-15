function TransportationPlanningCommittees() {
  return (
    <div
      className="p-4 border rounded-2xl"
      id="TransportationPlanningCommittees"
    >
      <h2 class=" text-[20px] font-semibold mb-4">
        Transportation Planning Committees
      </h2>
      <div class="flex flex-col md:flex-row lg:flex-row gap-6 overflow-auto">
        <div class="flex flex-col gap-4">
          <div className="text-[13px]">
            <span>Dan Naunheim (Co-Chair)</span>
            <br />
            <span>Norm Etling (Co-Chair)</span>
          </div>
          <a href="#">
            <button class="border text-[12px] cursor-pointer hover:bg-amber-700 hover:text-white border-amber-500 text-amber-500 font-bold py-2 px-4 rounded-full w-full">
              UPCOMING TPC MEETINGS
            </button>
          </a>
          <a href="#">
            <button class="border pointer text-[12px] cursor-pointer hover:bg-amber-700 hover:text-white border-amber-500 text-amber-500 font-bold py-2 px-4 rounded-full w-full">
              PAST MEETING MATERIALS
            </button>
          </a>
        </div>
        <div class="w-full">
          <h3 class="mb-3 text-xl font-semibold">Missouri</h3>
          <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4  gap-2 text-[12px] md:text-[14px] lg:md:text-[14px] ">
            <p>Rich Bradley</p>
            <p>Amanda Brauer</p>
            <p>Jessica Gershman</p>
            <p>Jim Grutsch</p>
            <p>Angelica Gutierrez</p>
            <p>Mike Henderson</p>
            <p>Christine Ingrassia</p>
            <p>Pat Kelly</p>
            <p>John Lyons</p>
            <p>Dan Naunheim</p>
            <p>Chris Poehler</p>
            <p>John Shrewsbury</p>
            <h3 class="mb-3 text-xl font-semibold">Illinois</h3>
            <p>Cindy Simmons</p>
            <p>Kirk Brown</p>
            <p>Stan Darter</p>
            <p>Tony Erwin</p>
            <p>Norm Etling</p>
            <p>Bob Hill</p>
            <p>Aaron Metzger</p>
            <p>S.J. Morrison</p>
            <p>Chris Poehler</p>
            <p>Richard Sauget, Jr.</p>
            <p>Craig Short</p>
            <p>Adam Walden</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransportationPlanningCommittees;
