import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react'
import { LoadingSpinner } from "../components/LoadingSpinner";
import { getOneLaunch } from "../services/spacexApiServices";

export const OneLaunch = (props) => {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(false)
    const [launch, setLaunch] = useState(null)

    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            getOneLaunch(id)
                .then((data) => {
                    console.log(data);
                    setLaunch(data);
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => {
                    setIsLoading(false)
                })
        }, 2000)

    }, [id])

    if (launch === null) {
        return <LoadingSpinner />
    }

    const {name,date_local,details,links} = launch;
    const {flickr, article} = links
    const {original: originalImageUrls} = flickr

    // const {
    //     date_local,
    //     details,
    //     name,
    //     links: {
    //         flickr: { original: originalImageUrls },
    //     },
    //     links: {
    //         article
    //     }
    // } = launch;

    return <div className="flex-col align-items-center text-center">
        <h2>{name}</h2>
        <h4>Date:</h4>
        <p>{date_local}</p>
        <h4>Details:</h4>
        <p>{details}</p>
        {
            originalImageUrls.map((url) => {
                return (
                    <img
                        className="shadow-img rounded mb-md"
                        src={url}
                        alt="Launch"
                        width="60%" />
                )
            })
        }
        {

            article && (
                <iframe
                    title="Launch Article"
                    src={article}
                    width="50%"
                    height="800"
                    allowfullscreen=""
                    loading="lazy"
                />
            )
        }
    </div>
}

