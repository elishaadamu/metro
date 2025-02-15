function AdvisoryCommittees() {
  return (
    <div className="p-4 border rounded-2xl">
      <h2 class=" text-[20px] font-semibold mb-4">
        Air Quality Advisory Committee
      </h2>
      <div class="flex gap-6 overflow-auto">
        <div class="flex flex-col gap-4">
          <a href="#">
            <button class="border text-[12px] cursor-pointer hover:bg-amber-700 hover:text-white border-amber-500 text-amber-500 font-bold py-2 px-4 rounded-full w-full">
              UPCOMING AQAC MEETINGS
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
          <div class="grid grid-cols-4 gap-2 text-[14px] ">
            <p>Aaron Cadman</p>
            <p>Jackie Covington</p>
            <p>Alicia Daniels</p>
            <p>Rory Davis</p>
            <p>Jack Fishman</p>
            <p>Susannah Fuchs</p>
            <p>Mike Henderson</p>
            <p>Pat Kelly</p>
            <p>Mark Leath</p>
            <p>SJ Morrison</p>
            <p>Jared Opsal</p>
            <p>Bradley Schad</p>
            <p>Christopher Schmidt</p>
            <p>Ken Sharkey</p>
            <p>Ryan Tilley</p>
            <p>Betsy Tracy</p>
            <p>James Watson</p>
            <p>Dan Weitkamp</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvisoryCommittees;
