import {useEffect , useState} from 'react'

function useCurrInfo(currency){
    const [data , setData] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/${currency}.json`)
        .then((res)=>res.json)
        .then((res)=>setData[res[currency]])
    } , [currency])
    console.log(data)
    return data
}
export default useCurrInfo