import { useState } from "react";
import emailjs from "emailjs-com";

const Request = () => {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "service_q2atlic", // استبدلها بمعرف الخدمة من EmailJS
        "template_bl1rzrq", // استبدلها بمعرف التمبليت
        e.target,
        "Qbm6Sa-_IeY3NH13W" // استبدلها بـ Public Key
      )
      .then(() => {
        alert("✅ تم إرسال البيانات بنجاح!");
        e.target.reset();
        setSending(false);
      })
      .catch((error) => {
        console.error("❌ خطأ أثناء الإرسال:", error);
        alert("❌ حصلت مشكلة أثناء الإرسال!");
        setSending(false);
      });
  };

  return (
    <div>
      <div className="bg-[#a29696b5] w-full py-40 text-white">
        <div className=" flex justify-center items-center">
          <h2 className="text-5xl font-bold text-[#F26B00]">طلب عرض سعر</h2>
        </div>
        <div className="mx-20 mt-10 border-2 border-[#F26B00] p-10 ">
          <div className="text-center mb-10">
            {" "}
            <h3 className="text-2xl font-bold mb-4">
              امليء بيانات طلب عرض السعر
            </h3>
            <p>سيتم التواصل معك فوراً</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="hidden"
              name="time"
              value={new Date().toLocaleString()}
            />

            <div>
              <label className="block mb-1 font-medium">الاسم كامل</label>
              <input
                type="text"
                name="name"
                required
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">
                رقم الموبايل للتواصل
              </label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">نوع المعدة</label>
              <input
                type="text"
                name="equipment"
                required
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">
                الارتفاع المطلوب بالمتر
              </label>
              <input
                type="number"
                name="height"
                required
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">موعد الاستلام</label>
              <input
                type="date"
                name="startDate"
                required
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">موعد التسليم</label>
              <input
                type="date"
                name="endDate"
                required
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">رسالتك (اختياري)</label>
              <textarea
                name="message"
                rows="4"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full bg-orange-600 text-white py-3 rounded-md hover:bg-orange-700 transition disabled:opacity-50"
            >
              {sending ? "جارٍ الإرسال..." : "إرسال الطلب"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Request;
