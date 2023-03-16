import { useEffect, useState } from "react"
import {throttle} from 'underscore'
const useScrollLocation = function(){
    const [scrollX,setScrollX] = useState(0)
    const [scrollY,setScrollY] = useState(0)
    useEffect(()=>{
       const  scrollMove =throttle(function(){
        setScrollX(window.scrollX)
        setScrollY(window.scrollY)
    },200)
        // 1.开启鼠标滚动事件监听
        window.addEventListener('scroll',scrollMove)
        return ()=>{
            // 2.取消鼠标滚动事件
            window.removeEventListener('scroll',scrollMove)
        }
    },[])

    return {scrollX,scrollY}
}

export default useScrollLocation