import React from 'react'

function Header() {
    return (
        <div className='w-screen h-14 fixed bg-[#141414] shadow-head top-0'>
            <div className='flex justify-between mx-12 h-14 text-gray-500 items-center'>
                <div className=' font-head text-2xl'>Listenify</div>
                <div><i className='fa fa-user text-xl'></i></div>
            </div>
        </div>
    )
}

export default Header
