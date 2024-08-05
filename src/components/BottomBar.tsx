import { Link } from "react-router-dom"

function BottomBar() {
  return (
    <section className="fixed bottom-0 z-10 w-full rounded-t-3xl bg-white p-4 backdrop-blur-sm border-2 xs:px-7 md:hidden">
        <div className="flex items-center justify-between gap-3 xs:gap-5">
        <Link to='/' className="md:text-base lg:text-xl font-semibold  text-gray-600 bg-white text-shadow-lg shadow-purple-100 rounded-lg px-1">Home</Link>
        <Link to='/services' className="md:text-base lg:text-xl font-semibold text-gray-600 bg-white text-shadow-lg shadow-purple-100 rounded-lg px-1">Services</Link>
        <Link to='/donate' className="md:text-base lg:text-xl font-semibold text-orange-900 text-shadow-lg bg-yellow-500 px-2 py-1 rounded-lg shadow-lg border border-orange-300 shadow-orange-200 ">Donate</Link>        <Link to='/festivals' className="md:text-base lg:text-xl font-semibold text-gray-600 bg-white text-shadow-lg shadow-purple-100 rounded-lg px-1">Festivals</Link>
        <Link to='/facilities' className="md:text-base lg:text-xl font-semibold text-gray-600 bg-white text-shadow-lg shadow-purple-100 rounded-lg px-1">Facilities</Link>
        </div>
    </section>
  )
}

export default BottomBar