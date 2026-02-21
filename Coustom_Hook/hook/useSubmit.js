// an hook cannot be async function at all 
// keep this in mind forever 
// now in this i have to make an coutom hook

import { useState } from "react";


export function useSubmit (fetchfn ){
    const[issubmitting , setissubmitting] = useState(false);
    const [errorMessage , seterrorMessage] = useState();

    async function submit (data){
        setissubmitting(true);
        try {
            await fetchfn(data)
        } catch (error) {
            seterrorMessage({message : error.message || " an error occurend while submitting"})
        }
        finally {
            setissubmitting(false);
        }
    }
    return {issubmitting , errorMessage , submit};
}