import {useState} from "react";
import  Link  from "next/link";
import  Image  from "next/image";
import {KeyboardArrowDownRounded, KeyboardArrowUpRounded } from '@material-ui/icons'
import styles from './CountriesTable.module.css'


const orderBy = (countries,value, direction="")=>{
    if(direction === 'asc') {
        return [...countries].sort((a,b) => a[value] > b[value] ? 1 : -1)
    }

    if(direction === 'desc') {
        return [...countries].sort((a,b) => a[value] > b[value] ? -1 : 1)
    }

    return countries
}

const SortArrow = ({dir})=>{
    if(!dir){ return <></>}
    else if (dir==="desc") {return (<div className={styles.h_arrow} >
        <KeyboardArrowUpRounded  color="inherit"/>
    </div>)
    }
    
    else {return (<div className={styles.h_arrow} >
        <KeyboardArrowDownRounded  color="inherit"/>
    </div>)}
}
export default function CountriesTable({countries}){
    const [dir, setDir] = useState()
    const [value, setValue] = useState()

    const orderedCountries = orderBy(countries, value, dir)

    const switchDir = ()=>{
        if(!dir){
            setDir("desc")
        }
        else if(dir=== "desc"){
            setDir("asc")
        }
        else{
            setDir(null)
        }
    }

    const setValueandDir = (val)=> {
        switchDir();
        setValue(val)

    }

    return(
        <div>
            Countries
            <div className={styles.heading} >
                <button className={styles.h_name} onClick={()=> setValueandDir('name')}  >
                    name
                    {value==="name" && <SortArrow dir={dir}  />}

                </button>
                <button className={styles.h_population} onClick={()=> setValueandDir('population')}   >
                    Populcation
                    {value==="population" && <SortArrow dir={dir}  />}
                </button>
                <button className={styles.h_area} onClick={()=> setValueandDir('area')}   >
                    Area (km<sub style={{fontSize:"0.5rem"}}>2</sub>)
                    {value==="area" && <SortArrow dir={dir}  />}

                </button>
                <button className={styles.h_gini} onClick={()=> setValueandDir('gini')}   >
                    Gini
                   {value==="gini" && <SortArrow dir={dir}  />}
                </button>
            </div>
            {orderedCountries.map(country=>(
                <Link href={`/country/${country.alpha3Code}`}  key={country.alpha3Code} >
                    <div className={styles.row}>

                        <div className={styles.flag}>
                            <Image src={country.flag} width="100%" height="100%" />
                        </div>
                        <div className={styles.name}>{country.name}</div>
                        <div className={styles.population}>{country.population}</div>
                        <div className={styles.area}>{country.area || 0}</div>
                        <div className={styles.gini}>{country.gini || 0} %</div>
                    </div>
                </Link>
            ))}
        </div>
    )
}