import React from "react";



    const getResource = async(url)=>{

        const res = await fetch(url),
              some = await res.json();

        
        return some;

    }

 
