import React from "react";




const Doptions = ()=>{

    const paul = fetch('https://imdb8.p.rapidapi.com/title/v2/find?title=The%20Dark%20Knight%20(2008)&limit=20&sortArg=moviemeter%2Casc')
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));


return(

    
    <>
    <paul/>


    
    </>
)

}

export default Doptions;
