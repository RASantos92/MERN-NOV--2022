import axios from "axios";
//'https://api.spacexdata.com/v4/launches'
const http = axios.create({
    baseURL: "https://api.spacexdata.com/v4"
}) 

export const getAllLaunches = async (id) => {
    const person = await http.get(`/person/${id}`);
    const homeworld = await http.get(`/homeworld/${person.homeworld}`)
    return {person: person, homeworld: homeworld};
}

export const getOneLaunch = async (id) => {
    const res = await http.get(`/launches/${id}`);
    return res.data;
}