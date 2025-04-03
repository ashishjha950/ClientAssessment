import { useEffect, useState } from "react"
import Card from "../components/Card"
import Navbar from "../components/Navbar"
import Data from "../assets/Data"

const ReservationPage = () => {


  return (
    <div>
        <Navbar/>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 bg-neutral-950 p-2 gap-2">
        {Data && Data.map((item, index) => {
            return <Card key={index} data={item} />
        })}
        </div>
    </div>
  )
}

export default ReservationPage