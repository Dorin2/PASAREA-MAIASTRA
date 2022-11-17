import React from "react";




const Doptions = ()=>{

    const paul = () =>{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f098b1f8eemsha2e550004965d05p164e7ejsn9c8baeeb8d86',
                'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
            }
        };
        
        fetch('https://imdb8.p.rapidapi.com/title/'v2/find?title=Pirates%20of%20the%20Caribbean%3A%20Dead%20Mans%20Chest&limit=1&sortArg=moviemeter%2Casc', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    };

    
return(
    paul()
   
)

}

export default Doptions;
