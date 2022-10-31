import React from "react";
import { useState } from "react";

const FlashcardFrom = (props) => {
    const [category, setCategory] = useState("")
    const [question, setQuestion] = useState("")
    const [correct_answer, setAnswer] = useState("")
    const {addNewFlashcard} = props;
    

    const handleNewCardSubmit = (e) => {
        e.preventDefault();
        const newFlashCard = {
            flipped: false,
            category: category,
            // shorthand when the dey name matches var name
            question,
            correct_answer,
            dateCreated: new Date()
        }
        setCategory("")
        setQuestion("")
        setAnswer("")
        // mutating state directly the page has to reload to get the information that was changed
        // flashcards.push(newFlashCard)
        // setFlashcards(flashcards)
        addNewFlashcard(newFlashCard)
        return newFlashCard
    }
    return(
        <form onSubmit={(e) => {
            handleNewCardSubmit(e)
        }}>
            <h3>Add flashcard</h3>
            <div>
                <label>category: </label>
                <input onChange={(e) => {
                    setCategory(e.target.value)
                }} type="text" value={category}></input>
            </div>
            <div>
                <label>Front: </label>
                <input onChange={(e) => {
                    setQuestion(e.target.value)
                }} type="text" value={question}></input>
            </div>
            <div>
                <label>Back: </label>
                <input onChange={(e) => {
                    setAnswer(e.target.value)
                }} type="text" value={correct_answer}></input>
            </div>
            <button>add</button>
        </form>
    )
}

export default FlashcardFrom