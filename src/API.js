
const url = "https://newsdata.io/api/1/latest";
const apiKey = process.env.REACT_APP_API_KEY;

export default class API {
    constructor() {
        this.url = url;
        this.apiKey = apiKey;
        this.params = new URLSearchParams({apikey : this.apiKey});

    }

    setQuery(query) {
        if(query === null) {
            this.params.delete("q");
            return ;
        }
        this.params.set("q", query);
    }
    setCountry(country) {
        if(country === null) {
            this.params.delete("country");
            return ;
        }
        this.params.set("country", country);
    }
    setLanguage(language) {
        if(language === null) {
            this.params.delete("language");
            return ;
        }
        this.params.set("language", language);
    }
    setCategory(category) {
        if(category === null) {
            this.params.delete("category");
            return ;
        }
        this.params.set("category", category);
    }
    // setCustomParams(params) {
    //     for (let key in params) {
    //         this.params.set(key, params[key]);
    //     }
    // }
    async getNews() {
        let response = await fetch(this.url + "?" + this.params.toString());
        let data = await response.json();
        this.nextPage = data.nextPage;
        return data;
    }
    async getNextPage() {
        let response = await fetch(this.url + "?page=" + this.nextPage + "&" + this.params.toString());
        let data = await response.json();
        this.nextPage = data.nextPage;
        return data;
    }
}