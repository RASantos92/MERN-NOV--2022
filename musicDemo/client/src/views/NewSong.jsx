import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { createSong } from '../services/internalApiService'
export const NewSong = (props) => {
    const [formData, setFormData] = useState({
        title: '',
        artist: '',
        src: '',
        isAbove330: false,
        genre:'lo-fi'
    })

    const [errors, setErrors] = useState(null);

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        createSong(formData)
            .then((data) => {
                console.log('new song data:', data)
                navigate(`/songs/${data._id}`)
            })
            .catch((error) => {
                console.log(error.response?.data?.errors);
                setErrors(error.response?.data?.errors)
            })
    }

    const handleFormChanges = (e) => {
        if (e.target.type === 'checkbox') {
            setFormData({
                ...formData,
                [e.target.name]: e.target.checked,
            })
            return null;
        }
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div className="w-50 p-4 rounded mx-auto shadow">
        <h3 className="text-center"> New Song</h3>

        <form onSubmit={(e) => {
            handleSubmit(e);
        }}>
            <div className="form-group">
                <label className="h6">Title</label>
                <input
                    onChange={handleFormChanges}
                    type="text"
                    name="title"
                    value={formData.title}
                    className="form-control"
                />
            {
                errors?.title && (
                    <span className="text-danger">{errors.title?.message}</span>
                )
            }
            </div>
            <div className="form-group">
                <label className="h6">Artist</label>
                <input
                    onChange={handleFormChanges}
                    type="text"
                    name="artist"
                    value={formData.artist}
                    className="form-control"
                />
            </div>
            {
                errors?.artist && (
                    <span className="text-danger">{errors.artist?.message}</span>
                )
            }
            <div className="form-group">
                <label className="h6">You tube</label>
                <input
                    onChange={handleFormChanges}
                    type="text"
                    name="src"
                    value={formData.src}
                    className="form-control"
                />
                {
                errors?.src && (
                    <span className="text-danger">{errors.src?.message}</span>
                )
            }
            </div>
            <div className="form-group">
                <label className="h6">Genre</label>
                <select
                    onChange={handleFormChanges}
                    type="text"
                    name='genre'
                >
                    <option value='lo-fi'>lo-fi</option>
                    <option value='Rock'>Rock</option>
                    <option value='hip-hop'>hip-hop</option>
                    <option value='Other'>Other</option>
                </select>
            </div>
            <hr />
            <h5>is above 3:30</h5>
            <div className="form-check">
                <input
                    onChange={handleFormChanges}
                    name="isAbove330"
                    type="checkbox"
                />
                <label className='h6 form-check-lable'>is Above 3:30</label>
            </div>
            <button className="btn btn-sm btn-outline-success">Submit</button>
        </form>
    </div>
    )
}