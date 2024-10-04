import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';

export default function ActionIcons() {



    return (
        <div className='flex flex-row justify-center items-center m-2 none962'>
            {/* <Link href='/card'> */}
                <div className='flex flex-row justify-center items-center mx-5 cursor-pointer none962'>
                    <ShoppingCartIcon sx={{ fontSize: '40px', cursor: 'pointer' }} />
                    <p className='text-2xl font-montserrat font-medium ml-2'>Səbət</p>
                </div>
            {/* </Link> */}
        </div >
    )
}