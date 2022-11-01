import React from "react";
import { useState, useEffect } from "react";
import FlashcardForm from "./FlashcardForm";
import OneFlashcard from "./OneFlashcard";
import axios from 'axios'
import { getQuestions } from "../services/triviaApiService";

const Flashcards = (props) => {
    const [flashcards, setFlashcards] = useState(null);
    const [isLoading, setIsLoading] = useState(false)
    const {queryParams} = props


    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            getQuestions(queryParams)
                .then((res) => {
                    console.log(res.results);
                    setFlashcards(res.results);
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(
                    setIsLoading(false)
                )
        }, 5000)

    }, [queryParams])

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
            <FlashcardForm
                addNewFlashcard={addNewFlashcard}
            />
            <h1>{isLoading}</h1>
            <hr></hr>
            <main className='flex-row flex-wrap'>
                {
                    isLoading && <p>Loading...</p>
                }
                {
                    flashcards !== null && flashcards.map((card, i) => {
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