import { useState, type ReactElement } from "react";

import { FaHome, FaUser, FaBuilding } from "react-icons/fa";
import { PiUserSwitch } from "react-icons/pi";
import { IoIosCube } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { TbReportAnalytics } from "react-icons/tb";
import { RiMenuLine } from "react-icons/ri";
import React from "react";
import { Link } from "react-router";




interface Props{
  children: ReactElement
}

const Layout = (props:Props) => {
  const menus = [
    { name: "Inicio", link: "/home", icon: FaHome },
    { name: "Usuarios", link: "/users", icon: FaUser },
    { name: "Roles", link: "/roles", icon: PiUserSwitch },
    // { name: "Proveedores", link: "/supplier", icon: FaBuilding },
    // { name: "Productos", link: "/product", icon: IoIosCube},
    // { name: "Clientes", link: "/customer", icon: IoIosCube},
    // { name: "Ventas", link: "/sale", icon: FiShoppingCart },
    // { name: "Detalle Ventas", link: "/saleDetail", icon: TbReportAnalytics },
  ];
  const [open, setOpen] = useState(true);
  return (
    <section className="flex gap-6  " >
      <div className={`bg-dark-purple min-h-screen ${open ? "w-72 ml-0": "w-16 ml-0"} duration-500 text-gray-100 px-4 fixed top-0 `} >
        <div className="py-3 flex justify-end">
          <RiMenuLine
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-6 ">
          {menus?.map((menu, i) => (
            <Link to={menu?.link} key={i} className={`  group flex items-center text-sm  gap-3.5 font-medium p-1 hover:bg-gray-600 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "28" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              {/* <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2> */}
              

              
              
            </Link>
            
            
          ))}
        </div>
        <br />
        <br />
        
        

      </div>

      <div className={ `w-full ${open ? "ml-72 p-6": "ml-16 p-6"} duration-500`}>
        {props.children}
      </div>
    </section>
  );
};

export default Layout;