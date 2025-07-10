import { equipment } from "../Data";

const Equipment = () => {
  return (
    <div id="equipment" className="px-3">
      <div className="w-full text-center flex flex-col justify-center items-center">
        <h2 className="text-[#F26B00] mb-2 font-medium text-4xl">معداتنا</h2>
        <div className="h-[2px] w-[250px] bg-blue-400"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-6 mt-5 ">
        {equipment.map((item) => (
          <div
            key={item.id}
            className="border-1 relative border-[#F26B00] p-2 rounded group overflow-hidden"
          >
            <img className="w-full h-full" src={item.img} alt="" />
            <div className=" flex justify-center items-center bg-[#f26b007a] absolute bottom-0 right-0 h-0 group-hover:h-full transition-all w-full">
              <h3 className="font-bold text-4xl text-white hidden transition-all group-hover:block">
                {item.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Equipment;
