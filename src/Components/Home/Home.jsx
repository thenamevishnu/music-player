import React, { useState } from 'react'
import SongPlay from '../SongPlay/SongPlay'

function Home() {

    const [type,setType] = useState("end")
    const [query,setQuery] = useState("")
    const [result, setResult] = useState([])

    return (
        <div className='mt-20 md:mx-10 mx-2 text-center'>
            <div className='justify-center flex'>
                <input type='text' placeholder='Enter title...' value={query} onChange={e=>setQuery(e.target.value)} className=' placeholder:text-gray-800 mb-5 w-11/12 sm:w-9/12 md:w-7/12 lg:w-5/12 xl:3/12 2xl:2/12  px-4 outline-none rounded-2xl py-2 bg-[#141414] text-gray-500 border-2 border-gray-900'/>
                
            </div>
            {
                    result.map((item,index) => {
                        return(
                            <div className='text-white' key={index}>
                                {item.name}
                            </div>
                        )
                    })
                }
            
                <SongPlay type={type}/>
            
        </div>
    )
}

export default Home
