// TODO: Create a bottom navbar for mobile phones and implemment a render logic
export default function Navbar() {
  return (
    <div className="h-16 w-full flex justify-between items-center px-4 lg:px-10 bg-white/40 border-b border-gray-700/20 shadow-lg rounded-b-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 fixed top-0 left-0 right-0 z-10">
      <span className="">
        <img src="/logo.png" alt="logo" className="h-14" />
      </span>
      <span className="flex w-[60%] justify-evenly">
        <button className="text-lg font-semibold text-purple-900 text-shadow-lg shadow-purple-100">Home</button>
        <button className="text-lg font-semibold text-purple-900 text-shadow-lg shadow-purple-100">About</button>
        <button className="text-lg font-semibold text-purple-900 text-shadow-lg shadow-purple-100">Services</button>
        <button className="text-lg font-semibold text-purple-900 text-shadow-lg shadow-purple-100">Media</button>
        <button className="text-lg font-semibold text-purple-900 text-shadow-lg shadow-purple-100">Festivals</button>
        <button className="text-lg font-semibold text-purple-900 text-shadow-lg shadow-purple-100">Facilities</button>
        <button className="text-lg font-semibold text-orange-900 text-shadow-lg bg-yellow-500 px-2 py-1 rounded-lg shadow-lg border border-orange-300 shadow-orange-200 ">Donate</button>
      </span>
    </div>
  );
}
