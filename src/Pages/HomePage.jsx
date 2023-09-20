import React from 'react'
import Home from '../Components/Home/Home'
import Header from '../Components/Header/Header'

function HomePage() {
    return (
        <div>
            <Header/>
            <Home/>
            <div className='text-red-700 mt-10 text-center'>Dev | <span onClick={()=>window.open("https://github.com/thenamevishnu","_blank")}>@thenamevishnu</span></div>
        </div>
    )
}

export default HomePage
