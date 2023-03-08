import axios from "axios";

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '7af44e697bmsh1b44e7ddccf702bp1bfa0djsn6f696a1de6fd',
    'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'
  }
};

export default class Requests {
    async getVillains(){
        const resultVillains = await axios.get('https://superhero-search.p.rapidapi.com/api/villains', options)
        return resultVillains.data;
    }
    
    async getHeroes(){
        const resultHeroes = await axios.get('https://superhero-search.p.rapidapi.com/api/heroes', options)
        return resultHeroes.data;
    }
};