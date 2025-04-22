const API_KEY = "5f1c2a6616af63081c9e5c47c641d40f";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async()=>{
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    console.log(data.results)
    return data.results;
}

export const searchMovies = async(query)=>{
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
}