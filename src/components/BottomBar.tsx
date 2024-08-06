import { Link } from "react-router-dom"

function BottomBar() {
  return (
    <section className="fixed bottom-0 z-10 w-full rounded-t-3xl bg-white p-4 backdrop-blur-sm border-2 xs:px-7 md:hidden">
        <div className="flex items-center justify-between gap-3 xs:gap-0">
        <Link to='/' className="xs:text-xs md:text-base lg:text-xl font-semibold text-gray-600 bg-white shadow-purple-100 rounded-lg xs:px-0 px-1">Home</Link>
        <Link to='/services' className="xs:text-xs md:text-base lg:text-xl font-semibold text-gray-600 bg-white text-shadow-lg shadow-purple-100 rounded-lg px-1">Services</Link>
        <Link to='/donate' className="xs:text-xs md:text-base lg:text-xl font-semibold text-orange-900 text-shadow-lg bg-yellow-500 px-2 py-1 rounded-lg shadow-lg border border-orange-300 shadow-orange-200 ">Donate</Link>       
        <Link to='/festivals' className="xs:text-xs md:text-base lg:text-xl font-semibold text-gray-600 bg-white text-shadow-lg shadow-purple-100 rounded-lg px-1">Festivals</Link>
        <Link to='/facilities' className="xs:text-xs md:text-base lg:text-xl font-semibold text-gray-600 bg-white text-shadow-lg shadow-purple-100 rounded-lg px-1">Facilities</Link>
        </div>
    </section>
  )
}

export default BottomBar