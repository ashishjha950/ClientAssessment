import { FaRegSquare,FaPlusCircle } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className='px-3 py-2 bg-neutral-950  text-white'>
        <div className="flex justify-between items-center flex-wrap gap-2">
        <div className='text-xl flex items-center justify-center font-bold'>
            <div className="pr-3 ">
            <FaRegSquare/>
            </div>
            <span className='px-3 border-l-2 border-gray-500'>Reservation</span>
        </div>
        <div className="flex items-center gap-2">
            <button className="cursor-pointer text-blue-500 border border-blue-500 px-3 py-2 text-sm bg-neutral-950  rounded flex items-center gap-1 justify-center hover:text-white hover:bg-blue-600 transition duration-300 ease-in-out">
                <span>Actions</span>
                <MdKeyboardArrowDown/>
            </button>
            <button className="cursor-pointer text-white px-3 py-2 text-sm bg-blue-500 rounded flex items-center gap-1 justify-center hover:bg-blue-600 transition duration-300 ease-in-out">
                <FaPlusCircle/>
                <span>Create</span>
            </button>
            <button className="cursor-pointer text-white px-3 py-3 text-sm bg-blue-500 rounded gap-1 hover:bg-blue-600 transition duration-300 ease-in-out">
                <IoIosMenu/>
            </button>
        </div>
        </div>
        <div className="flex items-center justify-start flex-wrap gap-2 mt-2">
        <div className="flex items-center bg-neutral-950  border border-gray-600 px-2 py-1 rounded">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent text-white px-2 py-1 outline-none"
          />
          <IoSearch color="white" />
        </div>

        <select className="cursor-pointer text-white px-3 py-2 text-sm bg-neutral-950  rounded hover:bg-gray-700 transition duration-300 border border-gray-600 ease-in-out">
          <option value="pending">Communication</option>
        </select>
        <select className="cursor-pointer text-white px-3 py-2 text-sm bg-neutral-950  rounded hover:bg-gray-700 transition duration-300 border border-gray-600 ease-in-out">
          <option value="pending">Status</option>

        </select>
        <select className="cursor-pointer text-white px-3 py-2 text-sm bg-neutral-950  rounded hover:bg-gray-700 transition duration-300 border border-gray-600 ease-in-out">
          <option value="pending">Source</option>

        </select>
        <select className="cursor-pointer text-white px-3 py-2 text-sm bg-neutral-950  rounded hover:bg-gray-700 transition duration-300 border border-gray-600 ease-in-out">
          <option value="pending">Payment</option>
        </select>

        <input type="date" className="border rounded border-gray-500 px-2 py-2" />

      </div>

    </nav>
  )
}

export default Navbar