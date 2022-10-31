import React from "react";
import { useState } from "react";

const FlashcardForm = (props) => {
    const [formData, setFormData] = useState({
        category: "",
        question: "",
        correct_answer: "",
        flipped: false,
        dateCreated: new Date()
    })
    const {addNewFlashcard} = props;
    

    const handleNewCardSubmit = (e) => {
        e.preventDefault();
        const newFlashCard = formData
        setFormData({
            category: "",
            question: "",
            correct_answer: "",
            flipped: false,
            dateCreated: new Date()
        })
        // mutating state directly the page has to reload to get the information that was changed
        // flashcards.push(newFlashCard)
        // setFlashcards(flashcards)
        addNewFlashcard(newFlashCard)
        return newFlashCard
    }

    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    return(
        <form onSubmit={(e) => {
            handleNewCardSubmit(e)
        }}>
            <h3>Add flashcard</h3>
            <div>
                <label>category: </label>
                <input 
                onChange={handleChange}
                type="text"
                name="category" 
                value={formData.category}></input>
            </div>
            <div>
                <label>Front: </label>
                <input onChange={handleChange} 
                type="text" 
                name="question"
                value={formData.question}></input>
            </div>
            <div>
                <label>Back: </label>
                <input onChange={handleChange} 
                type="text" 
                name="correct_answer"
                value={formData.correct_answer}></input>
            </div>
            <button>add</button>
        </form>
    )
}

export default FlashcardForm