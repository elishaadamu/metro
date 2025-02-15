function BicyclePedestrianAdvisoryCommittees() {
  return (
    <div
      className="p-4 border rounded-2xl"
      id="BicyclePedestrianAdvisoryCommittees"
    >
      <h2 class=" text-[20px] font-semibold mb-4">
        Bicycle Pedestrian Advisory Committees
      </h2>
      <div class="flex flex-col md:flex-row lg:flex-row gap-6 overflow-auto">
        <div class="flex  flex-col gap-4">
          <div className="text-[13px]">
            <span>- Jacque Knight (Chair)</span>
            <br />
            <span>- Sara Nelson (Vice-Chairman)</span>
          </div>
          <a href="#">
            <button class="border text-[12px] cursor-pointer hover:bg-amber-700 hover:text-white border-amber-500 text-amber-500 font-bold py-2 px-4 rounded-full w-full">
              UPCOMING BQAC MEETINGS
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
          <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4  gap-2 text-[12px] md:text-[14px] lg:md:text-[14px]  ">
            <p>Misty Bell</p>
            <p>John Bugh</p>
            <p>Lisa Cagle</p>
            <p>Chris Clercx</p>
            <p>Angelica Gutierrez</p>
            <p>Kevin Jemison</p>
            <p>Karen Karabell</p>
            <p>Jacque Knight</p>
            <p>John Kohler</p>
            <p>Cindy Mense</p>
            <p>Sara Nelson</p>
            <p>Scott Ogilvie</p>
            <p>Jennifer Reiman</p>
            <p>Shaun Tooley</p>
            <p>Mark Vogl</p>
            <p>Bryan Werner</p>
            <p>Travis Wood</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BicyclePedestrianAdvisoryCommittees;
