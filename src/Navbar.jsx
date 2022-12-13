import {FaEllipsisH } from "react-icons/fa"

const Navbar = () => {
 return (
    <div className="flex nav md:flex w-full justify-between p-6 px-32 z-0">
    <div className="logo">
      <p className="app__name -ml-28 md:-ml-11 text-black font-bold text-2xl -mt-2 ">
      Nutrifind
      </p>
    </div>

    <div className="link absolute right-4 ">
    {/* <FaEllipsisH className="md:hidden" onClick={()=> {}} />  */}
      <ul className="nav__link hidden md:flex gap-10 mt-1 -ml-10 font-bold ">
     
        {/* <li><a href="#services">Services</a></li> */}
          </ul>
      </div>
    </div> 

 );
}
export default Navbar