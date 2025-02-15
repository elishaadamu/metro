function InterAgencyConsultationGroup() {
  return (
    <div className="p-4 border rounded-2xl" id="InterAgencyConsultationGroup">
      <h2 class=" text-[20px] font-semibold mb-4">
        Inter Agency Consultation Group
      </h2>
      <div class="flex gap-6 overflow-auto">
        <div class="flex flex-col gap-4">
          <a href="#">
            <button class="border text-[12px] cursor-pointer hover:bg-amber-700 hover:text-white border-amber-500 text-amber-500 font-bold py-2 px-4 rounded-full w-full">
              UPCOMING IAGC MEETINGS
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
            <p>Mark Bechtel</p>
            <p>Jackie Covington</p>
            <p>Rory Davis</p>
            <p>Kathrina Donegan</p>
            <p>Matt Harrell</p>
            <p>Jason Heitman</p>
            <p>Mike Henderson</p>
            <p>Kevin Jemison</p>
            <p>Mark Leath</p>
            <p>Mike Leslie</p>
            <p>Brad McMahon</p>
            <p>Cathy Monroe</p>
            <p>SJ Morrison</p>
            <p>Christopher Schmidt</p>
            <p>Betsy Tracy</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InterAgencyConsultationGroup;
