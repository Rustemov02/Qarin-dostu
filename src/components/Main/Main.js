import OrderButton from '../OrderButton'
import xengelBg from '../../images/xengel_bg2.jpg'


export default function Main() {



    return (
        <div className='relative '>
            {/* Some text component here */}
 
            <img
                src={xengelBg}
                alt="Background"
                style={{
                    width: "100%", 
                    height : "100vh",
                    objectFit: "cover",
                    backgroundPosition: 'center',
                    position: 'relative'
                }}
                className='bg-black/50'
            />

            <div className="absolute inset-0 bg-black/40"></div>

            <div className='absolute top-[30%] left-1/2 transform -translate-x-1/2 sm:top-[35%] text-center  md:left-30 w-4/5 min-w-min '>

                <p className='text-white font-semibold font-nunito text-[50px] leading-none sm:text-8xl text-center  '>
                    Axtardığınız ləzzətin məkanı
                </p>
            </div>

        </div>
    )
}