import { MdOutlineContentCopy,MdOutlineEmail  } from "react-icons/md";
import { PiDotsThreeCircle } from "react-icons/pi";
import { CiCalendar,CiClock1  } from "react-icons/ci";
import { IoMdPeople } from "react-icons/io";
import { IoMan  } from "react-icons/io5";
import { TbManFilled } from "react-icons/tb";
import { FaWhatsapp,FaPhone } from "react-icons/fa";
import { TiDocument } from "react-icons/ti";

const Card = ({ data }) => {
    const getButtonColor = (status) => {
      switch (status.toLowerCase()) {
        case "approved":
        case "confirmed":
          return "bg-green-600 text-white";
        case "pending":
          return "bg-yellow-600 text-black";
        case "rejected":
        case "cancelled":
          return "bg-red-600 text-white";
        default:
          return "bg-gray-600 text-white"; 
      }
    };
  
    return (
      <div className='bg-neutral-950 px-3 border border-gray-600 rounded'>
        <div className='border-b border-gray-600 flex items-center justify-between'>
          <div className='flex items-center gap-2 py-2'>
            <input type="checkbox" className='cursor-pointer' />
            <img width={60} src={data.image} alt="company logo" />
            <div className='text-white'>
              <div>
                <span className='text-md font-bold'>{data.companyName}</span>
                <span className={`rounded-2xl text-sm mx-2 py-1 px-2 ${getButtonColor(data.status)}`}>
                  {data.status}
                </span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className='text-sm text-gray-400'>{data.companyAddress}</span>
                <span className="cursor-pointer"><MdOutlineContentCopy/></span>
              </div>
            </div>
          </div>
          <div>
            <PiDotsThreeCircle className='text-white cursor-pointer bg-gray-600 rounded-full' size={25}/>
          </div>
        </div>
  
        <div className="grid grid-cols-2 gap-2 my-4">
          <div className="flex flex-col gap-2 text-white">
            <div className="flex flex-col items-start gap-2">
              <div>
                <div className="flex items-center gap-2">
                  <CiCalendar/>
                  <span className='text-sm text-gray-400'>Check-in / Check-out</span>
                </div>
                <p>{data.checkInDate}</p>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <CiClock1 />
                  <span className='text-sm text-gray-400'>Booking Date</span>
                </div>
                <p>{data.bookingDate}</p>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <IoMdPeople />
                  <span className='text-sm text-gray-400'>Guests</span>
                </div>
                <div className="flex items-start gap-2 mt-2">
                  <div className="flex items-start ">
                    <span className='text-sm text-gray-400'><IoMan size={20}/></span>
                    <p>{data.guests.male}</p>
                  </div>
                  <div className="flex items-start ">
                    <span className='text-sm text-gray-400'><TbManFilled size={20}/></span>
                    <p>{data.guests.female}</p>
                  </div>
                </div>
              </div>
              <button className={`border px-2 rounded-2xl cursor-pointer ${getButtonColor(data.status)}`}>
                View Room
              </button>
            </div>
          </div>
          <div className="text-white flex flex-col items-baseline justify-between gap-2">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <MdOutlineEmail/>
                <span className='text-sm text-gray-400'>{data.contact.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone color="skyblue" />
                <FaWhatsapp color="green" size={20} />
                <span className='text-sm text-gray-400'>{data.contact.phone}</span>
              </div>
              <div>
                <div className="flex items-center gap-2 py-2">
                  <TiDocument color="gray"/>
                  <span className='text-sm text-gray-400'>Doc(s)</span> 
                </div>
                <span className={`rounded-2xl text-sm mx-2 py-1 px-2 ${getButtonColor(data.status)}`}>
                  {data.documents}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-0.5">
              <p>Total: {data.totalPrice}</p>
              <span className={`rounded-2xl text-sm mx-2 py-1 px-2 ${getButtonColor(data.status)}`}>
                {data.status}
              </span>
            </div>
          </div>
        </div>                
      </div>
    )
  }
  
  export default Card;