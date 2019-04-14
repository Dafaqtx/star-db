class SwapiService {
  _apiBase = "https://swapi.co/api";

  async gerResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could no fetch ${url}`);
    }

    return await res.json();
  }

  async getAllPeople() {
    const res = await this.gerResource(`/people/`);
    return res.results;
  }

  getPerson(id) {
    return this.gerResource(`/people/${id}`);
  }

  async getAllPlanets() {
    const res = await this.gerResource(`/planets/`);
    return res.results;
  }

  getPlanet(id) {
    return this.gerResource(`/planets/${id}`);
  }

  async getAllStarships() {
    const res = await this.gerResource(`/starships/`);
    return res.results;
  }

  getStarship(id) {
    return this.gerResource(`/starships/${id}`);
  }
}

export default SwapiService;
