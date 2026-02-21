import {useEffect,useState} from 'react'

export function usefetch(fetchfn,intialvalue){ 
    const [IsFetching  , setIsFetching] = useState(false)
    const [errorMessage  , seterrorMessage ] = useState();
    const [featchedData , setFeatchedData ] = useState(intialvalue);
    // by this we are setting up the data which we required to 
    // 
    useEffect(() => {
        async function fetchData() {
          setIsFetching(true);
          try {
            const  data = await fetchfn ();
            setFeatchedData(data);
            // to make it resusable we can expect a parameter in it 
          } catch (error) {
            seterrorMessage({
              message:
                error.message || 'Could not fetch Data .',
            });
            setIsFetching(false);
          }
        }
    
        fetchData();
    }, [fetchfn]);

    return{
        IsFetching,
        errorMessage,
        featchedData
    }
    
}



// basically usefetech is a fucntion 
// so what we can do with normal function we can do this in it 
// also and + we can use coutom hook in it in additional