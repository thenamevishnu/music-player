import { Slider } from "@material-tailwind/react";
import { useRef, useState } from "react";

function App() {

    const audioRef = useRef(null)
    const [percentage,setPercentage] = useState(0)
    const [isPlay,setIsPlay] = useState(true)
    const [dur, setDur] = useState(0)

    const onchange = (e) => { 
        const dur = audioRef.current.duration
        audioRef.current.currentTime = dur/100 * e.target.value
        setPercentage(e.target.value)
    }

    const playSong = () => { 
        if(isPlay){
            setIsPlay(false)
            audioRef.current.pause()
        }else{
            setIsPlay(true)
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
          audioRef.current.pause()
        }else{
          setDur(currentTime)
          setPercentage(percent)
        } 
    }

    const nextSong = () => {
        const parse = new URL(audioRef.current.src)
        const path = decodeURI(parse.pathname)
        if(path==="/Stay X Pon Kasavu Mix.mp3"){
            audioRef.current.src = "./Bad Habits.mp3"
            audioRef.current.alt = "Bad Habits"
        }else if(path === "/Bad Habits.mp3"){
            audioRef.current.src = "./Stay X Pon Kasavu Mix.mp3"
            audioRef.current.alt = "Stay X Pon Kasavu Mix"
        }
    }

    const prevSong = () => {
        const parse = new URL(audioRef.current.src)
        const path = decodeURI(parse.pathname)
        if(path==="/Stay X Pon Kasavu Mix.mp3"){
            audioRef.current.src = "./Bad Habits.mp3"
            audioRef.current.alt = "Bad Habits"
        }else if(path === "/Bad Habits.mp3"){
            audioRef.current.src = "./Stay X Pon Kasavu Mix.mp3"
            audioRef.current.alt = "Stay X Pon Kasavu Mix"
        }
    }

    return (
      <div className="w-screen h-screen flex justify-center items-center text-white text-center">
          <div className="bg-[#1b1f24] sm:w-[400px] w-screen rounded-2xl p-10">
              <audio src="./Stay X Pon Kasavu Mix.mp3" onTimeUpdate={updateTime} alt="Stay X Pon Kasavu Mix" ref={audioRef} autoPlay></audio>
              <div>
                    <img src="https://miro.medium.com/v2/resize:fit:1400/1*f7cZomxEUsR2AYQVlUXZog.gif" alt="music animation" className="rounded-xl"></img>
              </div>
              <div className="mt-2">{!audioRef?.current?.alt ?  "Stay X Pon Kasavu Mix" : audioRef?.current?.alt}</div>
              <div className="relative mt-3 w-full">
                  <Slider 
                        value={percentage} 
                        color="red"
                        defaultValue={0}
                        onChange={onchange}/>
              </div>
              <div className="flex justify-between text-xs mt-1.5">
                    <div>{!isNaN(audioRef.current?.duration) ? secondsToHMS(dur) : "0h 0m 0s"}</div>
                    <div>{!isNaN(audioRef.current?.duration) ? secondsToHMS(audioRef?.current?.duration) : "0h 0m 0s"}</div>
              </div>
              <div className="flex justify-around mx-12">
                    <button className="mt-5" onClick={nextSong}><i className="fa fa-backward"></i></button>
                    <button className="mt-5" onClick={()=>playSong(!isPlay)}>{isPlay ? <i className="fa fa-pause"></i> : <i className="fa fa-play"></i>}</button>
                    <button className="mt-5" onClick={prevSong}><i className="fa fa-forward"></i></button>
              </div>
          </div>
      </div>
    );
}

export default App;
