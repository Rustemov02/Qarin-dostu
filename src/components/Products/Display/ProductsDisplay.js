import data from '../../Data'
import { Link } from 'react-router-dom'
import Img from './productsImg'
  
export default function ProductsDisplay() {
 

    return (
        <div className="w-11/12 m-auto flex flex-row flex-wrap justify-around">

            {data.map((item, index) => ( 
                    <div key={index} className="displayContainer flex flex-col items-center justify-center rounded-lg w-1/3 min-w-[270px] max-w-[400px] m-3 bg-[#FFE1FF] h-auto min-h-[450px] p-3">
 
                        {/* image */}
                        <Img srcImg={item.img} />
 
                        {/* display */}
                        <div className="displayInfo w-5/6 flex flex-col justify-center items-center my-2">
                            <p className="text-2xl sm:text-3xl font-medium font-nunito text-center">{item.title}</p>
                            <p className="displayText text-base sm:text-xl  w-full my-3 text-center">{item.text}</p>

                            {/* Sifarish et button */}
                            <Link to={`product/${item.id}`}>
                                <button type="button" className="min-w-[120px] transition duration-500 ease-in py-2 px-3 me-2 mb-2 text-2xl w-1/5 font-medium text-white focus:outline-none bg-[#03346E] rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Sifariş et</button>
                            </Link>
                        </div>


                    </div>

            ))}
        </div>
    )
}