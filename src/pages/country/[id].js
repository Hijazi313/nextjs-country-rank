import Image from "next/image";
import Head from "next/head";
import axios from "axios";
import getCountry from "../../lib/country";

import styles from "./country.module.css";

import Layout from "../../components/Layout";
import { useEffect, useState } from "react";



export default function country({country}){
    const [borders, setBoarders] = useState([])
    const {area,capital,subregion, name, population, flag, region, languages, currencies,gini, nativeName, borders :cborders} = country
    

    const getBorders = async ()=>{
        const borders = await Promise.all(cborders.map(c =>  getCountry(c)))
        setBoarders(borders)
    }
    
    useEffect(()=>{
getBorders();
    },[])
    return (
        <>
        <Head>
        <meta name="description" content={`information about the population, area , happiness index neighbouring countries, region and subregion of ${name}`} />

        </Head>
        <Layout title={name} >
            <div className={styles.container} >
                <div  className={styles.container_left}>
                <div className={styles.panel} >
                <Image src={flag} width="100%" height="100%"  />
                
                <h1 className={styles.name} >{name}</h1>
                <div className={styles.region} >{region}</div>
                <div  className={styles.numbers}  >
                    <div className={styles.population} >
                        <div className={styles.value} >{population}</div>
                        <div className={styles.value} >Population</div>
                    </div>
                    <div className={styles.area} >
                        <div  className={styles.value} >{area}</div>
                        <div  className={styles.label} > Area </div>
                    </div>
                </div>
                </div>
                </div>
                <div  className={styles.container_right}>

                
            
                <div className={styles.details} >
                    <h4 className={styles.heading} >Details</h4>
                    <div className={styles.row} >
                        <div className={styles.d_label} >Capital</div>
                        <div  className={styles.d_value} >{capital}</div>
                    </div>
                    <div className={styles.row} >
                        <div className={styles.d_label} >Subregion</div>
                        <div  className={styles.d_value} >{subregion}</div>
                    </div>
                    <div className={styles.row} >
                        <div className={styles.d_label} >Languages</div>
                        <div  className={styles.d_value} >{languages.map(({name}) => name).join(", ")}</div>
                    </div>
                    <div className={styles.row} >
                        <div className={styles.d_label} >Currencies</div>
                        <div  className={styles.d_value} >{currencies.map(({name}) => name).join(", ")}</div>
                    </div>
                    <div className={styles.row} >
                        <div className={styles.d_label} >Native Name</div>
                        <div  className={styles.d_value} >{nativeName}</div>
                    </div>
                    <div className={styles.row} >
                        <div className={styles.d_label} >Gini</div>
                        <div  className={styles.d_value} >{gini} %</div>
                    </div>
                    <div className={styles.borders} >
                    <div className={styles.d_label} >Neighbor Countries</div>
                    <div className={styles.border_container} >

                        {borders.map(({flag, name, alpha3Code})=> <div key={alpha3Code}  className={styles.borders_country} > 
                            <Image src={flag} alt={`${name} flag`} height="100%" width="100%" />
                            <div className={styles.borders_name}>{name}</div>
                             </div>)}
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </Layout>
</>
    )   
}


export async function getStaticPaths(){
    const con= await (await axios.get("https://restcountries.eu/rest/v2/all")).data;
      const paths = con.map((country) => `/country/${country.alpha3Code}`)
    return {
            paths,
            fallback: false
        }
}


export async function getStaticProps({params}){

    const res = await getCountry(params.id);
  
    return {
        props: {
            country:res
        }
    }
}