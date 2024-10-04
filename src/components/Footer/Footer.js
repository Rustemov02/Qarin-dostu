import Logo from "../Header/Logo"
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

export default function Footer() {

    const list = ["Ana Səhifə", "Haqqımızda", "Sifariş"]
    const iconList = [<InstagramIcon />, <LocalPhoneIcon />, <AlternateEmailIcon />]

    return (
        <div className="flex flex-col justify-center items-center mt-3  pt-10 pb-3">


            {/* Logo */}
            <div className="my-2">
                <Logo />
            </div>


            {/* Actions List */}
            <div className="flex flex-col align-center text-center sm:flex-row justify-center w-4/5 my-2">
                {list.map((item, index) => (
                    <div key={index} className="min-w-fit transition duration-200 ease-in text-2xl font-nonito mx-2 px-3 cursor-pointer hover:text-[blue] ">
                        {item}
                    </div>
                ))}
            </div>

            {/* Icons list */}
            <div className="flex flex-row justify-center w-4/5 my-3">
                {iconList.map((item, index) => (
                    <div key={index} className=" transition duration-200 ease-in text-2xl mx-2 p-2 rounded-lg cursor-pointer hover:text-[blue] hover:size-2xl">
                        {item}
                    </div>
                ))}
            </div>

            <div>
                <p className="text-center">2024 © by Rustamov Dev Company.All rights reserved</p>
            </div>
        </div>
    )
}