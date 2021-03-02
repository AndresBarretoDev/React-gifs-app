import { useEffect, useState } from "react";
import { getGifs } from "../helpers/GetGifs";

export const UseFetchGifs = (category) => {
    const [state, setState] = useState({
        data:[],
        loading:true
    });

     useEffect( () => {

        getGifs(category)
            .then(imgs=>{
                setState({
                    data:imgs,
                    loading:false
                })
            })

    },[category])


    return state
}
