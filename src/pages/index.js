import {useState} from "react";
import axios from "axios";

import Layout from "../components/Layout"
import styles from '../styles/Home.module.css'
import SearchInput from '../components/SearchInput';
import CountriesTable from "../components/CountriesTable";

export default function Home({countries}) {
  const [word,setWord] = useState("");

  const filterCountries =  countries.filter(country => country.name.toLowerCase().includes(word) || 
  country.region.toLowerCase().includes(word)||
  country.subregion.toLowerCase().includes(word) )  

  const inputChange = (e)=> {
    e.preventDefault();

    setWord(e.target.value.toLowerCase());
  }
  return (
    <>
    <Layout title="Country Rank" >
      <div className={styles.counts} >
        Found Countries {filterCountries.length}
      <SearchInput placeholder="Filter By Name, Region or Subregion" onChange={inputChange}  />
      </div>
      <CountriesTable countries={filterCountries} />
    </Layout>
    </>
  )
}


export async function getStaticProps(){
  const res = await (await axios.get("https://restcountries.eu/rest/v2/all")).data;

      return{
        props: {
          countries: res
        }
      }
}