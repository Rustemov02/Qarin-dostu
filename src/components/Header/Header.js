import Logo from './Logo'
import SiteSection from './SiteSections'
import ActionIcons from './ActionIcons'

function Header() {


    return (
        <div className='flex flex-row absolute z-10 lg:w-5/6 sm:w-4/5 left-1/2 top-[20px] rounded-3xl transform -translate-x-1/2 bg-indigo-100 min-w-[300px] '>
            <div className='flex flex-row w-full m-auto items-center justify-around lg:p-2 md:p-1'>
                <Logo/>
                <SiteSection />
                <ActionIcons /> 
            </div>
        </div>
    )
}

export default Header