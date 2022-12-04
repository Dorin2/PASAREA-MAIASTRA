import React from "react";
import Content from "../content-body.js/content-body";
import "./all-film1.css";

const allfilms = [{name:"tt0120737",id:1},{name:"tt0167261",id:1},{name:"tt0167260",id:1},{name:"tt0903624",id:1},{name:"tt1170358",id:1},{name:"tt2310332",id:1},{name:"tt5052448",id:1},
                  {name:"tt0111161",id:1},{name:"tt0325980",id:1},{name:"tt0383574",id:1},{name:"tt0449088",id:1},{name:"tt0145487",id:1},{name:"tt0316654",id:1},{name:"tt0413300",id:1},{name:"tt0372784",id:1},{name:"tt0468569",id:2},
                  {name:"tt1345836",id:2},{name:"tt1375666",id:2},{name:"tt0361748",id:2},{name:"tt0371746",id:2},{name:"tt1228705",id:2},{name:"tt1300854",id:2},{name:"tt0770828",id:2},{name:"tt0172495",id:2},{name:"tt3416742",id:2},
                  {name:"tt3013602",id:2},{name:"tt4400058",id:2},{name:"tt0103064",id:2},{name:"tt0181852",id:2},{name:"tt2713180",id:2},{name:"tt3460252",id:2},{name:"tt0118971",id:2},{name:"tt0489099",id:2},{name:"tt1038686",id:2},
                  {name:"tt2294449",id:2},{name:"tt0167190",id:2},{name:"tt2274648",id:2},{name:"tt1205489",id:2},{name:"tt2584384",id:2},{name:"tt0458525",id:2},{name:"tt1877832",id:2},{name:"tt1119646",id:2},
                  {name:"tt1231583",id:2},{name:"tt1465522",id:2},{name:"tt0800320",id:2},{name:"tt2278388",id:2},{name:"tt0416449",id:2},{name:"tt1034389",id:2},{name:"tt1646987",id:2},{name:"tt0443453",id:2},{name:"tt7286456",id:2},
                  {name:"tt6751668",id:2},{name:"tt0360486",id:2},{name:"tt0099785",id:2},{name:"tt0104431",id:2},{name:"tt0816692",id:2},{name:"tt0796366",id:2},{name:"tt3659388",id:2},{name:"tt1440129",id:2},{name:"tt0814255",id:2},
                  {name:"tt0499549",id:2},{name:"tt0938283",id:2},{name:"tt0418279",id:2},{name:"tt1055369",id:2},{name:"tt0332280",id:2},{name:"tt1637688",id:2},{name:"tt0062759",id:2},{name:"tt1014759",id:2},{name:"tt0914798",id:2},
                  {name:"tt0253474",id:2},{name:"tt0120616",id:2},{name:"tt0209163",id:2},{name:"tt0859163",id:2},{name:"tt0277296",id:2},{name:"tt1745960",id:2},{name:"tt0152930",id:2},{name:"tt0183869",id:2},{name:"tt0295721",id:2},
                  {name:"tt1136608",id:2},{name:"tt1972591",id:2},{name:"tt8367814",id:2},{name:"tt0293564",id:2},{name:"tt0286112",id:2},{name:"tt1392190",id:2},{name:"tt1636826",id:2},{name:"tt4501244",id:2},{name:"tt3521126",id:2},
                  {name:"tt1731141",id:2}];
let size = 5;
    
let fiveElements = [];
    
for (let i = 0; i < Math.ceil(allfilms.length/size); i++){
        fiveElements[i] = allfilms.slice((i*size),(i*size) + size);
    }
let size1 = 3;

let fifteenElements = [];
    
for (let i = 0; i < Math.ceil(fiveElements.length/size1); i++){
        fifteenElements[i] = fiveElements.slice((i*size1),(i*size1) + size1);
    }

const FilmsPage1=()=>{
    // console.log(fifteenElements);

const Item =(arr) =>{

    return(arr.map((item,i)=>{
        const {id} = i;
        return(
            <Content name = {item}/>
        )
    })

    )


}

    





// const Item1 = totalfilms[1].map(e=><Content name = {e}/>);
// const Item2 = totalfilms[2].map(e=><Content name = {e}/>);

return(
    <>
    <div className="rown">
    </div>
    </>
);


};
export {fifteenElements};
export  {allfilms};

export default  FilmsPage1;

