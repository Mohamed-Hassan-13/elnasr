import { FaPhone } from "react-icons/fa";
import { LuDollarSign } from "react-icons/lu";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="px-3 mt-10 mb-25" id="contact">
      <div className="w-full text-center flex flex-col justify-center items-center">
        <h2 className="text-[#F26B00] mb-4 font-medium text-4xl">
          محتاج عرض سعر ؟ تواصل معنا الان
        </h2>
        <div className="h-[2px] w-[250px] bg-blue-400"></div>
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
  );
};

export default Contact;
