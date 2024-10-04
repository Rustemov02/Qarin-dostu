'use client'
import data from '../Data'
import { Dialog, DialogTitle } from '@mui/material'
import { useState, useEffect } from 'react'
import { Link , useParams} from 'react-router-dom'

export default function ProductDetails() {
    const {id} = useParams()
    const [quantity, setQuantity] = useState(1)
    // const [productsData, setProductsData] = useState(localStorage.getItem('productsData'))

   


    const increase = () => {
        setQuantity(prevQuantity => prevQuantity + 1)
    }

    const decrease = () => {
        setQuantity(prevQuantity => prevQuantity > 1 ? prevQuantity - 1 : prevQuantity = 1)
    }

    const [open, setOpen] = useState(false)

    const addToCart = (item) => {
        // setOpen(true)

        item.quantity = quantity

        const existingItem = JSON.parse(localStorage.getItem('productsData')) || []

        const existingIndexItem = existingItem.findIndex(stuf => stuf.id === item.id)

        if (existingIndexItem !== -1) {
            existingItem[existingIndexItem].quantity += item.quantity
        } else {
            existingItem.push(item)
        }

        // const updatedProducts = [...existingItem, item]

        localStorage.setItem('productsData', JSON.stringify(existingItem))

    }


    

    return (
        <div className=''> 
           
           
            {data.filter(stuf => stuf.id === Number(id)).map(item => (
                <div key={item.id} className='h-auto py-9 bg-[#F5EFFF] flex flex-col justify-center'>

                    <div className='card flex flex-row justify-center gap-9 items-center h-3/4'>
                        {/* IMAGE CONTAINER */}
                        <div className='w-fit'>
                            <img alt='img' className='h-[350px] w-3/2 min-w-60 rounded-3xl' src={item.img} />
                        </div>

                        {/* DETAILS CONTAINERs */}
                        <div className='w-1/2 min-w-[280px] m-4 flex flex-col '>
                            <div >
                                <p className='text-5xl font-medium font-montserrat py-2'>{item.title}</p>
                                <p className='text-2xl font-medium font-montserrat py-2'>{item.price} ₼</p>
                                <p className='text-sm font-medium sm:font-normal sm:text-xl py-2 min-w-[150px]'>{item.text}</p>
                            </div>

                            {/* BUTTONS - AMOUNT COMPONENT */}
                            <div className='flex flex-row justify-start orderButton'>

                                {/* inc-decrease button */}
                                <div className='flex flex-row border-2 w-fit border-gray mr-4'>
                                    <button onClick={decrease} className=' p-2 text-3xl font-semibold'>-</button>
                                    <input type='number' min={1} className='no-arrows bg-transparent p-2 border-r-2 border-l-2 border-gray w-20 text-center text-2xl' value={quantity} onChange={(e) => {
                                        setQuantity(Number(e.target.value))
                                    }} />
                                    <button onClick={increase} className=' p-2 text-3xl font-semibold'>+</button>
                                </div>

                                {/*Go to CART */}
                                <div className=''>
                                    <Link to='/card'>
                                        <button type="button" onClick={() => addToCart(item)} className="transition duration-500 ease-in py-2  mt-2 mb-2 text-2xl w-3/2 min-w-[180px] font-medium text-white  focus:outline-none bg-[#03346E] rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Karta əlavə et</button>
                                    </Link>
                                </div>

                            </div>
                            <div>

                            </div>
                        </div>

                    </div>
                    
                    {/* Dialog component */}

                    <Dialog open={open} className='border-2'>
                        <DialogTitle>Sifarişi tamamla !</DialogTitle>

                        <div className='flex flex-row justify-evenly items-center'>
                            {/* <div className='w-fit'>
                                <img className='h-[200px] w-120 rounded-3xl' src={`/images/${item.img}`} />
                            </div> */}

                            <div className='flex flex-row items-center'>
                                {/* Inc-decrease button */}
                                <div className='flex flex-row border-2 w-fit border-gray'>
                                    <button onClick={decrease} className=' p-2 text-3xl font-semibold'>-</button>
                                    <input type='number' min={1} className='no-arrows bg-transparent p-2 border-r-2 border-l-2 border-gray w-20 text-center text-2xl' value={quantity} onChange={(e) => {
                                        setQuantity(Number(e.target.value))
                                    }} />
                                    <button onClick={increase} className=' p-2 text-3xl font-semibold'>+</button>
                                </div>

                                {/* Amount */}
                                <p>{item.price * quantity} AZN</p>
                                <button onClick={() => setOpen(false)}>X</button>
                            </div>
                        </div>

                    </Dialog>

                </div>
            ))}

        </div>
    )
}