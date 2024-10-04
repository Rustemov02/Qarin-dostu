

import { Link } from "react-router-dom";
import { useEffect, useState } from "react"
import DeleteIcon from '@mui/icons-material/Delete';
import emailjs from '@emailjs/browser' 



export default function Card() {

    const [productsData, setProductsData] = useState([])
    const [userName, setUserName] = useState('')
    const [connect, setConnect] = useState('')

    useEffect(() => {

        emailjs.init({
            publicKey: 'nhvADr2G-rlep_jlW'
        })


        if (typeof window !== 'undefined') {
            const storedProducts = localStorage.getItem('productsData')
            if (storedProducts) {
                setProductsData(JSON.parse(storedProducts))
            }
        }
    }, [])

    const deleteItem = (id) => {
        const updatedData = productsData.filter(stuf => stuf.id !== id)

        setProductsData(updatedData)

        localStorage.setItem('productsData', JSON.stringify(updatedData))


    }

    const sendEmail = async (e) => {
        e.preventDefault()
        var data
        if (userName === '' || connect === '') {
            return alert('Ad vəya Nömrə hissəsi boş qala bilməz ! Zəhmət olmasa qeyd edin !')
        }
        if (productsData.length > 0) {
            data = {
                products: productsData.map(item => ({
                    title: item.title,
                    quantity: item.quantity,
                    amount: item.quantity * item.price
                }))
            };

        }

        // SEND EMAİL
        emailjs.send("service_ne8grdn", "template_oqhkpam", {
            from_name: userName,
            connect: connect,
            productsData: JSON.stringify(data)
        })
            .then((result) => {
                console.log(result.text)
                setConnect('')
                setUserName('')
                localStorage.clear()
                alert('Sifariş verildi! Bizim seçdiyiniz üçün təşəkkür edirik !')
                window.location.href = '/'
            }, (error) => {
                console.log(error.text)
            }
            )
    }


    return (

        <div className="my-5 flex flex-col justify-center">
            {productsData.length > 0 ? productsData.map((item, index) => (

                <div key={index} className="flex  flex-col gap-2 lg:flex-row justify-evenly w-full m-auto my-3 py-2 items-center bg-[#D1E9F6] ">
                    <img className="h-[150px] w-[250px]" src={item.img} />

                    <div className="w-1/4 min-w-[200px] text-center">
                        <p className="text-2xl font-montserrat bg-[#125B9A] text-white p-2 rounded-lg">  {item.title} </p>
                    </div>

                    <div className="w-1/4 min-w-[100px] text-center">
                        <p className="text-2xl font-montserrat bg-[#125B9A] text-white p-2 rounded-lg">  {item.quantity} ədəd</p>
                    </div>

                    <p className="text-2xl min-w-[220px] font-montserrat bg-[#125B9A] text-white p-2 rounded-lg">  Məbləğ : {item.price * item.quantity} AZN </p>
                    <DeleteIcon onClick={() => deleteItem(item.id)} className="text-4xl cursor-pointer" />


                </div>



            )) : <p className="text-5xl text-center p-2 m-2 font-montserrat ">Səbətiniz boşdur</p>}



            {/* Continue to shopping */}
            <div className="">
                <Link to='/' className="flex flex-row w-1/5 m-auto justify-center items-center my-10">
                    <button className="min-w-[260px] transition duration-300 ease-in py-3 px-3 me-2 mb-2 text-2xl w-full font-medium text-white focus:outline-none bg-blue-400 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Alış-verişə davam et !</button>
                </Link>
            </div>



            {/* SİFARİŞİ TAMAMLA */}
            {productsData.length > 0 ? (
                <div className="text-3xl flex flex-col justify-center items-center bg-[#D1E9F6] py-5">

                    <p className="text-center w-1/3 min-w-[270px] font-montserrat font-medium m-6 p-2 ">Yekun məbləğ : {productsData.reduce((total, item) => total + item.price * item.quantity, 0)} AZN</p>

                    <div className="w-2/3">
                        <input
                            id="name"
                            name="name"
                            onChange={(e) => {
                                setUserName(e.target.value)
                            }}
                            type="text"
                            placeholder="Adınız"
                            value={userName}
                            className="text-base sm:text-2xl block w-full min-w-[220] rounded-md py-1.5 pl-2 my-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                        />
                        <input
                            id="price"
                            name="price"
                            onChange={(e) => {
                                setConnect(e.target.value)
                            }}
                            type="text"
                            value={connect}
                            placeholder="Əlaqə nömrəsi və ya email adresi"
                            className="text-base sm:text-2xl block w-full rounded-md py-1.5 pl-2 my-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                        />
                    </div>

                    {/* IF clicked send all data to EMail */}
                    <button type="button" onClick={sendEmail} className="min-w-[220px] transition duration-500 ease-in py-3 px-5 me-2 mb-2 text-xl sm:text-2xl w-1/3 font-medium text-white focus:outline-none bg-blue-500 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Sifarişi tamamla !</button>

                </div>
            ) : null}





        </div>
    )
}