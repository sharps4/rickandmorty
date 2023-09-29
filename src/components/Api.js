import axios from 'axios';


class Api {
    static getApiResult(func, url, params = {}) {
        let get = '';
        for (let i in params) {get += i+'='+params[i]+'&';}
        axios.get('https://rickandmortyapi.com/api/'+url+'?'+get).then((response) => {func(response.data)});
    }

    static getAllCharacters(page, func) {
        Api.getApiResult(func, 'character', {'page': page});
    }

    static getSingleCharacter(id, func) {
        Api.getApiResult(func, 'character/'+id);
    }

    static getSingleEpisode(id, func) {
        Api.getApiResult(func, 'episode/'+id);
    }

    static getMultiplesEpisodes(id, func) {
        let episodes = '';
        for (let i of id) {episodes += i+',';}
        Api.getApiResult(func, 'episode/'+episodes);
    }
};

export default Api;