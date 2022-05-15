class Restaurant {
  constructor(el) {
    this.fetchApi();
  }

  async fetchApi() {
    const requestUrl = `http://localhost:1337/api/restaurants`;
    try {
      const response = await fetch(requestUrl);
      if (!response.ok)
        throw new Error(
          "We were not able to download our instagram feed this time. Sorry"
        );
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error);
    }
  }
}

const restaurants = document.querySelectorAll('[data-restaurant]');
[...restaurants].forEach(restaurant => new Restaurant(restaurant));