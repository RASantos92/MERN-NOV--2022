import { useParams } from "react-router-dom";

export const OneLaunch = (props) => {
    const { id } = useParams();
    return <h2>One Launch = id: {id}</h2>
}

