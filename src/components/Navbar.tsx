import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="max-md:hidden h-16 w-full flex justify-between items-center px-4 lg:px-10 bg-white border-b border-gray-700/20 shadow-lg rounded-b-lg bg-clip-padding fixed top-0 left-0 right-0 z-10">
      <span className="">
        <img src="/images/logo.png" alt="logo" className="h-14" />
      </span>
      <span className="flex w-[60%] justify-evenly">
        <Link to='/' className="text-lg font-semibold text-purple-900 text-shadow-lg shadow-purple-100">Home</Link>
        <Link to='/about' className="text-lg font-semibold text-purple-900 text-shadow-lg shadow-purple-100">About</Link>
        <Link to='/services' className="text-lg font-semibold text-purple-900 text-shadow-lg shadow-purple-100">Services</Link>
        <button className="text-lg font-semibold text-purple-900 text-shadow-lg shadow-purple-100">Media</button>
        <Link to='/festivals' className="text-lg font-semibold text-purple-900 text-shadow-lg shadow-purple-100">Festivals</Link>
        <Link to='/facilities' className="text-lg font-semibold text-purple-900 text-shadow-lg shadow-purple-100">Facilities</Link>
        <Link to='/donate' className="text-lg font-semibold text-orange-900 text-shadow-lg bg-yellow-500 px-2 py-1 rounded-lg shadow-lg border border-orange-300 shadow-orange-200 ">Donate</Link>
      </span>
    </div>
  );
}

export default Navbar;
