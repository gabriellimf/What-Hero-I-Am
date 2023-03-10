import Requests from '../datasource/request'

interface SearchResult {
  getHeroesFromApi(): Promise<string>;
}

class Main implements SearchResult {

  async getHeroesFromApi(): Promise<string> {
    const requestsHeroes = new Requests();
    const resultHeroes = await requestsHeroes.getHeroes();
    // const resultHeroesParsed = JSON.parse(resultHeroes);
    return resultHeroes[0];
  }
}

const main = new Main();

export default main;
