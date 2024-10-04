'use client'
import { useState } from "react"
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer } from "@mui/material";


export default function SiteSections() {

    const list = ["Ana Səhifə", "Məhsullar", "Əlaqə"]
    const [activeIndex, setActiveIndex] = useState(0)
    const [open, setOpen] = useState(false)

    const handleClick = index => {
        setActiveIndex(index)
    }

    const handleEvent = () => {
        setOpen(!open)
    }

    return (
        <div className="">
            <ul className="text-2xl flex flex-row text-center justify-center m-1 p-1 none962">
                {list.map((item, index) => (
                     <li key={index}
                        onClick={() => handleClick(index)}
                        style={{ color: activeIndex === index ? '#7D8ABC' : 'black' }}
                        className="m-1 py-1 px-3 cursor-pointer font-montserrat font-medium min-w-fit">
                        {item}
                    </li>
                    
                ))}
            </ul>


            <div className="hidden sectionMenuIcon ">
                <MenuIcon sx={{ fontSize: "40px" }} onClick={() => handleEvent()} />
            </div>

            <Drawer
                anchor='right'
                open={open}
                onClose={handleEvent}
                PaperProps={{
                    sx: { width: '50%' }
                }}
            >
                {["Ana Səhifə", "Səbət", "Məhsullar", "Əlaqə"].map((item, index) => (
                    <button key={index} className="text-3xl text-center my-2 bg-gray-100">{item}</button>
                ))}
            </Drawer>
        </div >
    )
}   