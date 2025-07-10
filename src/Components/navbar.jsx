import { useState } from "react";
import { NavItem } from "../Data";
import { FiAlignJustify } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" px-10 flex justify-between items-center absolute top-0 w-full z-50">
      <div>
        <img src="/assets/logo.png" width={150} height={150} alt="" />
      </div>
      <div>
        <FiAlignJustify
          size={50}
          className="cursor-pointer md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        />
      </div>
      <div className="ml-15 max-md:hidden">
        <ul className="flex gap-8 text-white ">
          {NavItem.map((item) => (
            <li className="font-bold text-xl " key={item.id}>
              {item.link ? (
                <a href={item.link}>{item.name}</a>
              ) : (
                <Link to={"/"}>{item.name}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div
        className={` md:hidden absolute top-0 right-0 h-screen bg-white transition-all  overflow-hidden z-50 ${
          isOpen ? "w-64" : "w-0"
        }`}
      >
        <div>
          <img src="/assets/logo.png" width={110} height={110} alt="" />
        </div>
        <ul className="flex flex-col text-black pr-3">
          {NavItem.map((item) => (
            <li
              className="font-bold text-xl py-3 border-b-[#ebebeb] border-b-1 cursor-pointer"
              key={item.id}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
