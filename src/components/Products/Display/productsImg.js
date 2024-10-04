
export default function Img({ srcImg }) {


    return (
        <div className="w-full min-w-[200px]"> 
            <img className="w-full sm:w-4/5 m-auto h-[200px] rounded-3xl" src={srcImg} />
        </div>
    )
}