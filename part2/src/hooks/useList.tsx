import { useState } from "react";

export const useList = (arr:any) => {

    const [list, setList] = useState<any>(arr)
 
    const push = (el:any) =>{
        // console.log(...list)
        // console.log(el)
        setList([...list,el])
    }
    const pop = () =>{
        var arr=[]
        for(var i=0; i<list.length-1;i++)
        {
            arr.push(list[i])
        }
        console.log(arr)
        setList([...arr])
    }
    const clear = () =>{
        setList([])
    }
    const reset = () =>{
        setList([...arr])
    }
    const map = (el:any) =>{       
        setList([...list.map(el)])
        // console.log(list)
    }

    return [list, { push, pop, clear, reset, map }]
};
