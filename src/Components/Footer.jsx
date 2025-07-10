import { FaFacebookF, FaPhone, FaWhatsapp } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-[#2f2d2ded] py-20 px-10 text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-y-5">
        <h1 className="text-2xl font-bold px-5">
          شركة النصر لتأجير وبيع المعدات الثقيلة. رواد في مجال استيراد وبيع
          وتأجير المعدات الثقيلة
        </h1>
        <div className="flex flex-col justify-center items-start gap-4 text-center">
          <h2 className="text-[#17DBF4] text-3xl font-bold">معلومات التواصل</h2>
          <div className="flex items-center gap-2">
            <a href="tel:01270255368">
              <FaPhone className="w-[30px] h-[25px]" color="red" />
            </a>
            <p className="text-xl">01270255368</p>
          </div>
          <div className="flex items-center gap-2">
            <a href="tel:01270255368">
              <FaPhone className="w-[30px] h-[25px]" color="red" />
            </a>
            <p className="text-xl">01270255368</p>
          </div>
          <div className="flex items-center gap-2">
            <IoLocation className="w-[30px] h-[25px]" color="red" />
            <p className="text-xl">الاسكندريه - العامريه - امام الكوبري</p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="https://www.facebook.com/ham.hassan.712640"
              target="_blank"
            >
              <FaFacebookF className="w-[35px] h-[35px]" color="blue" />
            </a>
            <a href="https://wa.me/201270255368" target="_blank">
              <FaWhatsapp className="w-[35px] h-[35px]" color="green" />
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-4 text-center">
          <h2 className="text-[#17DBF4] text-3xl font-bold">معداتنا</h2>
          <div className="flex gap-6 items-center w-full">
            <p className="text-xl w-[105px] text-start">مان ليفت</p>
            <p className="h-0.5 bg-red-500 w-full"></p>
          </div>
          <div className="flex gap-6 items-center w-full">
            <p className="text-xl w-[145px] text-start">سيزور ليفت</p>
            <p className="h-0.5 bg-red-500 w-full"></p>
          </div>
          <div className="flex gap-6 items-center w-full">
            <p className="text-xl w-[70px] text-start">فوركليفت</p>
            <p className="h-0.5 bg-red-500 w-full"></p>
          </div>
          <div className="flex gap-6 items-center w-full">
            <p className="text-xl w-[50px] text-start">اوناش</p>
            <p className="h-0.5 bg-red-500 w-full"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
