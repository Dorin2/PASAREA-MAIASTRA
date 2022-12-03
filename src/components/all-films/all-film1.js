import React from "react";
import Content from "../content-body.js/content-body";
import "./all-film1.css";

const allfilms = [ "tt0120737","tt0167261","tt0167260","tt0903624","tt1170358","tt2310332","tt5052448",
    "tt0111161","tt0325980","tt0383574","tt0449088","tt0145487","tt0316654","tt0413300","tt0372784","tt0468569",
    "tt1345836","tt1375666","tt0361748","tt0371746","tt1228705","tt1300854","tt0770828","tt0172495","tt3416742",
    "tt3013602","tt4400058","tt0103064","tt0181852","tt2713180","tt3460252","tt0118971","tt0489099","tt1038686",
    "tt2294449","tt0167190","tt2274648","tt1205489","tt2584384","tt0458525","tt1877832","tt1119646",
    "tt1231583","tt1465522","tt0800320","tt2278388","tt0416449","tt1034389","tt1646987","tt0443453","tt7286456",
    "tt6751668","tt0360486","tt0099785","tt0104431","tt0816692","tt0796366","tt3659388","tt1440129","tt0814255",
    "tt0499549","tt0938283","tt0418279","tt1055369","tt0332280","tt1637688","tt0062759","tt1014759","tt0914798",
    "tt0253474","tt0120616","tt0209163","tt0859163","tt0277296","tt1745960","tt0152930","tt0183869","tt0295721",
    "tt1136608","tt1972591","tt8367814","tt0293564","tt0286112","tt1392190","tt1636826","tt4501244","tt3521126",
    "tt1731141"
    ];
const FilmsPage1=()=>{
let size = 5;

let totalfilms = [];

for (let i = 0; i < Math.ceil(allfilms.length/size); i++){
    totalfilms[i] = allfilms.slice((i*size),(i*size) + size);
}
const Item = totalfilms[0].map(e=><Content name = {e}/>);
const Item1 = totalfilms[1].map(e=><Content name = {e}/>);
const Item2 = totalfilms[2].map(e=><Content name = {e}/>);

return(
    <>
    <div className="rown">
    {Item}
    </div>
    <div className="rown">
    {Item1}
    </div>
    <div className="rown">
    {Item2}
    </div>
    </>
);


};

export  {allfilms};

export default  FilmsPage1;

