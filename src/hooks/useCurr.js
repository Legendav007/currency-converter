import {useEffect , useState} from 'react'

function useCurrInfo(currency){
    const [data , setData] = useState({})
    useEffect(()=>{
       const fetchData = async ()=>{
        try{
            const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`);
            const text = await response.text();
            console.log("Raw response:" , text);
            const result = JSON.parse(text);
            setData(result[currency]);
        }
        catch(error){
            console.error(error);
        }
       };
       fetchData();
    } , [currency])
    console.log(data)
    return data
}
export default useCurrInfo
