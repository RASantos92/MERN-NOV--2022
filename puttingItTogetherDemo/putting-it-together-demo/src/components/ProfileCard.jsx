import React from "react";
import { useState } from "react";
import putWhateverHere from "./ProfileCard.module.css"

export const ProfileCard = (props) => {
    const { oneProfile: profile } = props;
    const [userProfile, setUserProfile] = useState(profile)
    const { userName, bio, likes } = userProfile
    const [l, setL] = useState(likes)

    // const [formData, setFormData] = useState({
    //     userName: "",
    //     bio: "",
    //     likes: 0
    // })

    // const [formDataErrors, setFormDataErrors] = useState({
    //     userNameError: "",
    //     bioError: "",
    //     likesError: ""
    // })


    return (
        <div className={putWhateverHere.cardStyle}>
            <h4 style={{
                textAlign: "center"
            }}
                className="text-success">{userName}</h4>
            <p className="text-center">Bio: {bio}</p>
            <p className="text-center">Likes: {l}</p>
            <div className="row">
                <div className="col-4"></div>
                <div
                    className="btn btn-success col"
                    onClick={(e) => {
                        setL(l + 1)
                    }}
                > Like Button</div>
                <div className="col-4"></div>
            </div>
        </div>
    )
}
            // <h1>{formDataErrors.userNameError}</h1>
            // <form action="">
            //     <input type="text" name="userName" onChange={(e)=>{
            //         if(e.target.value.length < 3 ){
            //             setFormDataErrors({
            //                 ...formDataErrors,
            //                 userNameError: "you need to be about 3 characters"
            //             })
            //         }else{
            //             setFormDataErrors({
            //                 ...formDataErrors,
            //                 userNameError: ""
            //             })
            //         }
            //         setFormData({
            //             ...formData,
            //             [e.target.name] : e.target.value
            //         })
            //     }} />
            // </form>