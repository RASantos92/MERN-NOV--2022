import { useEffect,useState } from "react"
import axios from 'axios'
import { LoadingSpinner } from "../components/LoadingSpinner";
export const Launches = (props)=> {
    const [launches, setLaunches] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        setTimeout(()=>{
            axios
            .get('https://api.spacexdata.com/v4/launches')
            .then((res) => {
                console.log(res.data);
                setLaunches(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(()=>{
                setIsLoading(false)
            })
        }, 2000)
        
    },[])

    return (
        <div className="flex-col align-items-center text-center">
            {
                isLoading && <LoadingSpinner/>
            }
            {
                launches.map((launch, i) => {
                    const {name, date_local} = launch;
                    return (
                        <div key={i}className="w-25pct mb-md shadow rounded">
                            <h2>{name}</h2>
                            <p>Date: {date_local}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}