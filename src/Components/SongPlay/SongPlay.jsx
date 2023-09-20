import { Slider } from '@material-tailwind/react'
import React, { useRef, useState } from 'react'
import {Songs} from '../../Services/Songs'

function SongPlay({type}) {
        const audioRef = useRef("")
        const [percentage,setPercentage] = useState(0)
        const [isPlay,setIsPlay] = useState(true)
        const [dur, setDur] = useState(0)
        const [playing,setPlaying] = useState(true)

        const onchange = (e) => { 
            const dur = audioRef.current.duration
            audioRef.current.currentTime = dur/100 * e.target.value
            setPercentage(e.target.value)
        }

        const playSong = () => { 
            if(isPlay){
                setIsPlay(false)
                setPlaying(false)
                audioRef.current.pause()
            }else{
                setIsPlay(true)
                setPlaying(true)
                audioRef.current.play()
            }
        }


        const secondsToHMS = (seconds=0) => {
            const h = Math.floor(seconds / 3600)
            const m = Math.floor((seconds % 3600) / 60)
            const s = Math.floor(seconds % 60)
            return `${h}h ${m}m ${s}s`;
    }

        const updateTime = (e) => { 
            const percent = (e.currentTarget.currentTime/e.currentTarget.duration)*100
            const currentTime = audioRef.current.currentTime
            if(percent===100){
                setIsPlay(false)
                setPlaying(false)
                audioRef.current.pause()
                nextSong()
                setPlaying(true)
                audioRef.current.play()
                setIsPlay(true)
            }else{
            setDur(currentTime)
            setPercentage(percent)
            }
        }

        const nextSong = () => {
            const max = Songs.length - 1
            let findIndex = Songs.find(item => item.src === audioRef?.current?.src)
            findIndex = Songs.indexOf(findIndex)
            if(max === findIndex){
                audioRef.current.src = Songs[0].src
                audioRef.current.alt = Songs[0].title
            }else{
                audioRef.current.src = Songs[findIndex+1].src
                audioRef.current.alt = Songs[findIndex+1].title
            }
            setPlaying(true)
            audioRef.current.play()
        }


        const prevSong = () => {
            const max = Songs.length - 1
            let findIndex = Songs.find(item => item.src === audioRef?.current?.src)
            findIndex = Songs.indexOf(findIndex)
            if(findIndex === 0){
                audioRef.current.src = Songs[max].src
                audioRef.current.alt = Songs[max].title
            }else{
                audioRef.current.src = Songs[findIndex-1].src
                audioRef.current.alt = Songs[findIndex-1].title
            }
            setPlaying(true)
            audioRef.current.play()
        }

        return ( 
        <>
        {type === "end" ? <div className="text-white text-center flex justify-center">
            <div className="bg-[#141414] shadow-bold sm:w-[400px] w-11/12  rounded-2xl p-10">
                <div>
                    <audio src={Songs[0].src} alt={Songs[0].title} onTimeUpdate={updateTime} ref={audioRef} autoPlay/>
                </div>
                <div>
                        <img src={playing ? "./playing.gif" : "./stop.jpg"} alt="music animation" className="rounded-xl"></img>
                </div>
                <div className="mt-2">{!audioRef?.current?.alt ?  Songs[0].title : audioRef?.current?.alt}</div>
                <div className="relative mt-3 w-full">
                    <Slider 
                            value={percentage} 
                            color="red"
                            defaultValue={0}
                            onChange={onchange}/>
                </div>
                <div className="flex justify-between text-xs mt-1.5">
                        <div>{secondsToHMS(dur)}</div>
                        <div>{isNaN(audioRef?.current?.duration) ? "0h 0m 0s" : secondsToHMS(audioRef?.current?.duration)}</div>
                </div>
                <div className="flex justify-around mx-12">
                        <button className="mt-5" onClick={prevSong}><i className="fa fa-backward"></i></button>
                        <button className="mt-5" onClick={()=>playSong(!isPlay)}>{isPlay ? <i className="fa fa-pause"></i> : <i className="fa fa-play"></i>}</button>
                        <button className="mt-5" onClick={nextSong}><i className="fa fa-forward"></i></button>
                </div>
            </div>
        </div> : ""}
        </>
    );
}

export default SongPlay
