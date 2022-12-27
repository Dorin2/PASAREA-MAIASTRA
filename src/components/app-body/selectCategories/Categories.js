import React, {useState} from "react";



const Categories =({returnElement})=>{

    const [Categoriess,setCategoriess] = useState(
        [{name:'TOP FILME',id:1,status:true},{name:'TOP SERIAL TV',id:2,status:false},{name:'TOP ANIMATION',id:3,status:false}]);

    const ChooseItem = (e) => {
        const newArr = Categoriess.map((item) =>
          item.id === e.id ? { ...item, status: true } : { ...item, status: false }
        );
        setCategoriess(newArr);
      };
    

    return(
        <div className="section-button-right">
              {Categoriess.map((e)=>(
              <button className={e.status ? "filmsActive" : "" } key = {e.id} onClick={()=>{ChooseItem(e);returnElement(e.name)}}>{e.name}</button>))}
        </div>
    )
}

export default Categories;