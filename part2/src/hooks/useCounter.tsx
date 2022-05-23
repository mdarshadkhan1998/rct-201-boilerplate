import { useState } from "react";

export const useCounter = (init:any) => {
//     console.log(init)
    const [value, setValue] = useState(init)
    
    const inc = (el:number|void) =>{
            if(el===undefined)
            {
                    el=1;
            }
            setValue(value+el)
    }
    const dec = (el:number|void) =>{
        if(el===undefined)
        {
                el=1;
        }
            setValue(value-el)
    }
    const set = (el:number) =>{
            setValue(el)
    }
    return { value, inc, dec, set }
};
