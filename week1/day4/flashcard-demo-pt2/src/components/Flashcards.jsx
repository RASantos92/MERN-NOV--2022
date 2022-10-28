import React from "react";
import { useState } from "react";
import flashCardData from '../data/flashCards.json';
import FlashcardFrom from "./FlashcardFrom";
import OneFlashcard from "./OneFlashcard";

const Flashcards = (props) => {
    const [flashcards, setFlashcards] = useState(flashCardData);


    const addNewFlashcard = (newFlashcard) => {
        const updatedCards = [newFlashcard, ...flashcards]
        setFlashcards(updatedCards)
    }

    const handleFlipCardClick = (event, selectedIdx) => {
        const updatedFlashCards = flashcards.map((card, i) => {
            if (selectedIdx === i) {
                card.flipped = !card.flipped;
                return card
            }
            return card
        })
        setFlashcards(updatedFlashCards)
    }

    const handleDelete = (event, idxToRemove) => {
        event.stopPropagation();
        console.log("here")
        const filteredFlashcards = flashcards.filter((card, i) => {
            return idxToRemove !== i;
        })

        setFlashcards(filteredFlashcards)
    }

    return (
        <div className='container'>
            <header style={{ textAlign: "center" }}>
                <h1>Programming Flash Cards</h1>
                <hr />
            </header>
            <FlashcardFrom
                addNewFlashcard={addNewFlashcard}
            />
            <hr></hr>
            <main className='flex-row flex-wrap'>
                {
                    flashcards.map((card, i) => {
                        return (
                            <OneFlashcard
                                card={card}
                                handleFlipCardClick={handleFlipCardClick}
                                handleDelete={handleDelete}
                                idx={i} />
                        )
                    })
                }
            </main>
        </div>
    )
}

export default Flashcards