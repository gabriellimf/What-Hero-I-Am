import Requests from '../datasource/request'

interface SearchResult {
  getVillainsFromApi(): Promise<string>;
  getHeroesFromApi(): Promise<string>;
}

class Main implements SearchResult {
  async getVillainsFromApi(): Promise<string> {
    const requestsVillains = new Requests();
    const resultVillains = await requestsVillains.getVillains();
    return JSON.stringify(resultVillains[0]);
  }

  async getHeroesFromApi(): Promise<string> {
    const requestsHeroes = new Requests();
    const resultHeroes = await requestsHeroes.getHeroes();
    return JSON.stringify(resultHeroes[0]);
  }
}

const main = new Main();

export default main;
