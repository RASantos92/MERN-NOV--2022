import axios from 'axios';

//https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=boolean

const http = axios.create({
    baseURL: 'https://opentdb.com/api.php'
})

export const getQuestions = (queryParams) => {
    const {amount,category,difficulty,type} = queryParams

    return http
        .get(`?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`)
        .then((res) => {
            return res.data
        })
}