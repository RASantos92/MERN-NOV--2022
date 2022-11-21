import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAllSongs, deleteSong } from "../services/internalApiService"
export const AllSongs = (props) => {
    const [songs, setSongs] = useState([])

    useEffect(() => {
        getAllSongs()
            .then((data) => {
                setSongs(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    const handleDeleteClick = (idToDelete) => {
        deleteSong(idToDelete)
            .then((data) => {
                console.log(data)
                const filteredSongs = songs.filter((song) => {
                    return song._id !== idToDelete
                })
                setSongs(filteredSongs)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <div className="w-50 mx-auto text-center">
            <h2>All Songs</h2>
            {songs.map((song, i) => {
                const { _id, title } = song;
                return (
                    <div key={i} className="shadow mb-4 rounded border p-4">
                        <h4>{title}</h4>
                        <div className="row d-flex justify-content-between">
                            <Link
                                to={`/songs/${_id}`}
                                className="col-3 btn btn-sm btn-outline-primary mx-1"
                            >
                                View
                            </Link>
                            <Link
                                to={`/songs/edit/${_id}`}
                                className="col-3 btn btn-sm btn-outline-warning mx-1"
                            >
                                Edit
                            </Link>
                            <button
                                className="col-3 btn btn-sm btn-outline-danger mx-1"
                                onClick={(e) => {
                                    handleDeleteClick(_id)
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}