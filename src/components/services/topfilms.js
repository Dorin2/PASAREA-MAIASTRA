export default class Topfilms{

      options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f098b1f8eemsha2e550004965d05p164e7ejsn9c8baeeb8d86',
            'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        }
    };


     getResource = async(url)=>{

        const res = await fetch(url, options)

        if(!res.ok){
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    
        }
    
        const some = await res.json();
    
        return some;
    };

    this.getResource('https://imdb8.p.rapidapi.com/auto-complete?q=The%20Lord%20of%20the%20Rings');




};

 
