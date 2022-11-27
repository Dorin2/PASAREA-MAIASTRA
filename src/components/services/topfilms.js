export default class Topfilms{

    


     getResource = async(url)=>{

        const res = await fetch(url)

        if(!res.ok){
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    
        }


        const some = await res.json();

        return some;
    };


    getFilms = async()=>{

        const res = await this.getResource('http://www.omdbapi.com/?i=tt3896198&apikey=ae4e6130');
        return await res
    }
    


};

 
