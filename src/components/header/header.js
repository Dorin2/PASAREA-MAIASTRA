import React from "react";
import './header.css';

const Header = ()=>{
    return (
        <>
            <div className="background-section">
                <img  className ="background" src="pasare22.jpg" alt="background"/>
                < a href="google.com"><img  className ="logo1" src="logo1.svg" alt="logo1" width='46px' height='34px'/></a>
                <h1 className="title">PASAREA MAIASTRA</h1>
                <img  className ="logo2" src="logo2.svg" alt="logo2" width='845px' height='110px'/>
            </div>
            <div>
                <h3 className="title2">PROIECTUL PASAREA MAIASTRA</h3>
                <p className="header-description">Se stie sigur ca este nespus 
                de scumpa la vedere, frumusețea ei unică și lumina celestă pe care o răspândește 
                încântând doar privirea celor cu adevărat privilegiați. Despre cântecul ei, 
                care nu răsună decât în singurătate, se spune că ar întineri orice ascultător. 
                Pasărea Măiastră, pasare justițiară, posedând o putere magică inepuizabilă, aparține Tărâmului Celălalt,
                 trăind izolat și neexpunându-și splendidul penaj multicolor decât foarte rar.Aveti un adevarat privilegiu sa 
                priviti cu ochii proprii un adevarat miracol al naturii. </p>
            </div>

        </>
    )

}

export default Header;



