import React from "react";

const OneFlashcard = (props) => {
    const {handleFlipCardClick, handleDelete, card, idx: i} = props
    const {category, correct_answer:back, question:front, flipped} = card
    const dateCreated = new Date().getTime();
    return(
        <section key={i} className='card'
            onClick={(e) => {
                handleFlipCardClick(e, i)
            }}>
            <h3>{category}</h3>
            {
                flipped ? (
                    <p>{back}</p>
                ) : (
                    <p>{front}</p>
                )
            }
            <button onClick={(e) => {
                handleDelete(e, i)
            }}>delete</button>
            <p>{dateCreated?.toString()}</p>
        </section>
    )
}

export default OneFlashcard
