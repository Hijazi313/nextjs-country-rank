import axios from "axios";

 const getCountry = async (id) => {
    try{
        const res = await (await axios.get(`https://restcountries.eu/rest/v2/alpha/${id}`)).data
        return res
 
     } catch(error) {
         console.log(error);
    }
 }
 export default getCountry