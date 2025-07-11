import AutoPlay from "./Slide";

const Clients = () => {
  return (
    <div className="py-15">
      <div className="w-full text-center flex flex-col justify-center items-center">
        <h2 className="text-[#F26B00] mb-4 font-medium text-4xl">
          بعض عملاؤنا
        </h2>
        <div className="h-[2px] w-[290px] bg-blue-400"></div>
      </div>
      <AutoPlay />
    </div>
  );
};

export default Clients;
