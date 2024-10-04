import logo from '../../images/logo.svg'

export default function Logo() {

    return(
        <div className="w-fit min-w-[150px] flex justify-center cursor-pointer ">
            <img src={logo} />
        </div>
    )
}