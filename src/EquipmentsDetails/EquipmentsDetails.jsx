import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { equipment } from "../Data";
import { LuDollarSign } from "react-icons/lu";
import { FaPhone } from "react-icons/fa";

const EquipmentsDetails = () => {
  const { name } = useParams();
  const [equipmentDet, setEquipmentDet] = useState(null);

  useEffect(() => {
    const result = equipment.find((item) => item.to === name);
    setEquipmentDet(result);
  }, [name]);

  if (!equipmentDet)
    return (
      <div className="absolute top-0 right-0 bottom-0 left-0 z-100 overflow-hidden bg-[#a29696] flex justify-center items-center  w-full h-full">
        <img
          src="/assets/logo.png"
          className="w-1/2 animate-pulse-zoom"
          alt=""
        />
      </div>
    );

  return (
    <div className="min-h-screen bg-[#a29696b5] pt-35 px-6 md:px-20 pb-10 text-white font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-start">
        {/* الصورة */}
        <div className="flex flex-col justify-center items-center w-full md:w-1/2">
          <div className="w-full md:w-1/2">
            <img
              src={equipmentDet.img}
              alt={equipmentDet.name}
              className="rounded-2xl shadow-2xl w-full max-h-[500px] object-cover bg-white "
            />
          </div>
          <div className="flex justify-center mt-20 gap-10 flex-wrap">
            <Link
              to={"/request"}
              className="flex gap-2 items-center font-bold text-2xl bg-[#F26B00] text-white px-6 py-3 rounded-3xl hover:bg-[#d55a00] transition-colors cursor-pointer duration-300"
            >
              <LuDollarSign color="white" />
              <span className="ml-2">طلب عرض سعر</span>
            </Link>
            <a
              href="tel:01270255368"
              className="flex gap-2 items-center font-bold text-2xl bg-[#6D6D6B] text-white px-6 py-3 rounded-3xl hover:bg-[#F26B00] transition-colors cursor-pointer duration-300"
            >
              <FaPhone color="white" />
              <span className="ml-2">اتصل بنا</span>
            </a>
          </div>
        </div>
        {/* بيانات المعدة */}
        <div className="w-full md:w-1/2 space-y-8">
          <h1 className="text-4xl font-bold border-b border-white pb-2">
            {equipmentDet.name}
          </h1>
          <p className="text-lg text-white/90">
            اكتشف الأنواع المختلفة من <strong>{equipmentDet.name}</strong>{" "}
            المتاحة لدينا، واعرف الفرق بينهم لاختيار الأنسب لاحتياجك.
          </p>

          {/* الأنواع */}
          <div className="space-y-6">
            {equipmentDet.details?.map((type, i) => (
              <div
                key={i}
                className="bg-white/10 border border-white/20 rounded-xl p-5 hover:shadow-xl transition"
              >
                <h2 className="text-2xl font-semibold text-white mb-2">
                  {type.type}
                </h2>
                <p className="text-white/80 mb-2">{type.description}</p>
                <p className="text-sm text-white/70 mb-2">
                  <span className="font-bold text-white">الاستخدام:</span>{" "}
                  {type.usage}
                </p>
                <ul className="list-disc list-inside text-sm text-white/80 space-y-1">
                  {type.features.map((f, idx) => (
                    <li key={idx}>✔️ {f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipmentsDetails;
