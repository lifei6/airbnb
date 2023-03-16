import { useDispatch } from "react-redux";
import {  useEffect} from "react";
import { changeFixAction } from "@/store/features/main";



const useFix = function(fix){
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(changeFixAction(fix))
    },[dispatch])
}

export default useFix