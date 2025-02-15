function PublicInvolvementPlanAdvisoryCommittees() {
  return (
    <div
      className="p-4 border rounded-2xl"
      id="PublicInvolvementPlanAdvisoryCommittees"
    >
      <h2 class=" text-[20px] font-semibold mb-4">
        Public Involvement Plan Advisory Committees
      </h2>
      <div class="flex flex-col md:flex-row lg:flex-row gap-6 overflow-auto">
        <div class="flex flex-col gap-4">
          <a href="#">
            <button class="border text-[12px] cursor-pointer hover:bg-amber-700 hover:text-white border-amber-500 text-amber-500 font-bold py-2 px-4 rounded-full w-full">
              UPCOMING PIP-AC MEETINGS
            </button>
          </a>
          <a href="#">
            <button class="border pointer text-[12px] cursor-pointer hover:bg-amber-700 hover:text-white border-amber-500 text-amber-500 font-bold py-2 px-4 rounded-full w-full">
              PAST MEETING MATERIALS
            </button>
          </a>
        </div>
        <div class="w-full">
          <h3 class="mb-3 text-2xl font-semibold">Members</h3>
          <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4  gap-2 text-[12px] md:text-[14px] lg:md:text-[14px] ">
            <p>Marie Elliot</p>
            <p>Wayne Flesch</p>
            <p>Kevin Jemison</p>
            <p>Will Jordan</p>
            <p>Kimberly Lackey</p>
            <p>Andria Nelson Roberts</p>
            <p>Amanda Schomaker</p>
            <p>Betsy Solomon</p>
            <p>Alice Stanley</p>
            <p>Maude Trost</p>
            <p>Dr. Morris Taylor</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PublicInvolvementPlanAdvisoryCommittees;
