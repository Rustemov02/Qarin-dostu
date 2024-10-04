import InventoryIcon from '@mui/icons-material/Inventory';  //packaking
import LocalShippingIcon from '@mui/icons-material/LocalShipping'; //delivery
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'; //quality
import FollowTheSignsIcon from '@mui/icons-material/FollowTheSigns'; //self service
import { icon } from '@fortawesome/fontawesome-svg-core';

export default function ServiceDetails() {
    const iconStyle = {
        fontSize: "60px",
        color: '#16325B'
    }
    const serviceData = [
        {
            icon: <InventoryIcon style={iconStyle} />,
            title: "Qablaşdırma",
            explain: "Çatdırılma zamanı qidanın qorunması və keyfiyyətinin saxlanmasına önəm veririk"
        },
        {
            icon: <LocalShippingIcon style={iconStyle} />,
            title: 'Çatdırılma',
            explain: 'Keyfiyyətli və sürətli çatdırılma xidməti ilə rahatlıq təmin edirik'
        },
        {
            icon: <WorkspacePremiumIcon style={iconStyle} />,
            title: 'Keyfiyyət',
            explain: 'Hər porsiyada ənənəvi dad və yüksək qida standartlarına riayət edirik'
        },
        // {
        //     icon: <FollowTheSignsIcon />,
        //     title: 'Özünlə götür',
        //     explain: 'Xəngəl ən təzə və keyfiyyətli inqrediyentlərdən hazırlanır. Hər porsiyada ənənəvi dad və yüksək qida standartlarına riayət edirik'
        // }
    ]


    return (
        <div className='bg-[#FFF6EA] py-9'>
            <div className='displayContainer flex flex-row w-4/5 items-center m-auto justify-center'>
                {serviceData.map((item, index) => (
                    <div key={index} className={`styleServices w-1/3 m-8 h-40 flex flex-col justify-center items-center border-gray `}>

                        <div>{item.icon}</div>
                        <p className='my-1 text-2xl font-montserrat font-medium'>{item.title}</p>
                        <p className='my-2 text-center font-montserrat'>{item.explain}</p>

                    </div>
                ))}
            </div>
        </div>
    )
}