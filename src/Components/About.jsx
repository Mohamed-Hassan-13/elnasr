import { FaRegLifeRing } from "react-icons/fa";
import { IoHeartCircle, IoRocketSharp } from "react-icons/io5";

const About = () => {
  return (
    <div className="bg-white py-16 px-18">
      <div className="flex flex-col items-center">
        <h2 className="text-[#002F5E] text-[28px] font-[600] mb-6">
          <span className="text-[#F26B00]">لماذا تختار شركة النصر لتأجير </span>
          المعدات الثقيلة
        </h2>
        <p className="text-[#6D6D6B] text-[18px] text-center mb-2">
          شركة النصر لبيع وتأجير المعدات الثقيلة ، شركتنا متخصصة في جميع انواع
          الاوناش والرافعات : منها الرافعات المقصية ( سيزر لفت ) ، الرافعات
          المفصلية والمستقيمة ( مان لفت ) ،الرافعات الشوكية ( فوك لفت ) ،
          الرافعات التلسكوبية{" "}
        </p>
        <p className="text-[#6D6D6B] text-[18px] text-center">
          كما تقوم بتأجير ابراج الاضاءة والمولدات مع الاخذ في الاعتبار مطابقة
          جميع المعدات لمواصفات ومقاييس الامان ، الامن الصناعي المعمول بها في
          مصر . نتشرف في شركة ( النصر) بخدمتكم وتقديم الأفضل .
        </p>
      </div>
      <div className="mt-6 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 text-center items-center gap-8">
        <div className="flex flex-col items-center ">
          <div className="w-100 flex justify-center">
            <div className="bg-[#F26B00] rounded-full w-[90px] h-[90px] flex justify-center items-center">
              <FaRegLifeRing color="white" className="w-[50px] h-[50px]" />
            </div>
          </div>
          <h2 className="text-[#F26B00] text-[25px] font-bold">معدات مضمونة</h2>
          <p className="text-[#6D6D6B] font-400 mt-4">
            فى شركة النصر نملك افضل و احدث انواع المعدات لرفع اعمالك و لضمان
            سلامتك و سلامة عملك جميع معداتنا تخضع للصيانة قبل العمل
          </p>
        </div>
        <div className="flex flex-col items-center ">
          <div className="w-100 flex justify-center">
            <div className="bg-[#F26B00] rounded-full w-[90px] h-[90px] flex justify-center items-center">
              <IoRocketSharp color="white" className="w-[50px] h-[50px]" />
            </div>
          </div>
          <h2 className="text-[#F26B00] text-[25px] font-bold">
            سرعة فى انجاز العمل
          </h2>
          <p className="text-[#6D6D6B] font-400 mt-4">
            فى شركة النصر لدينا فنيين على اعلى مستوى من الخبرات فى العمل على
            المعدات الثقيلة و نضمن لك السرعة فى انجاز عملك
          </p>
        </div>
        <div className="flex flex-col items-center ">
          <div className="w-100 flex justify-center">
            <div className="bg-[#F26B00] rounded-full w-[90px] h-[90px] flex justify-center items-center">
              <IoHeartCircle color="white" className="w-[50px] h-[50px]" />
            </div>
          </div>
          <h2 className="text-[#F26B00] text-[25px] font-bold">
            خبرات واسعة ومتكاملة
          </h2>
          <p className="text-[#6D6D6B] font-400 mt-4">
            فى شركة النصر نملك خبرات واسعة و تاريخ ثقيل فى مجال المعدات الثقيلة
            و معدات الرفع بمختلف انواعها و اشكالها
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
