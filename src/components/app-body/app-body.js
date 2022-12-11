import React,{Component} from "react";
import './app-body.css';


import Films from "../all-films/all-film";



export default class Section extends Component{
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.state = ''
      }

      onClick() {
        this.setState({ show: 'active' });
        console.log(this.state);
      }

render(){
    const { show } = this.state;
    
    return(
       
            <div className="app">
                <div className="section-select">
                    <div className="section-button">
                        <div className="section-button-left"><button  className="total">TOTAL</button></div>
                        <div onClick={this.onClick} className='section-button-right'>
                            <button className="topfilme filmsActive">TOP FILME</button>
                            <button className="topserial">TOP SERIAL TV</button>
                            <button className="topanimation">TOP ANIMATION</button>
                        </div>
                    </div>
                    <span className="line"></span>
                    <div className="section-filter">
                        <div  className="section-filter-right">
                            <button className="filter">INTERESANT</button>
                            <button className="filter">TRIST</button>
                            <button className="filter">MELANCOLIC</button>
                            <button className="filter">VESEL</button>
                            <button className="filter">CIUDATEL</button>
                        </div>
                        <div className="section-filter-left">
                            
                        </div>
                    </div>
                </div>
                <div className="section-films">
                    <Films/>
                </div>
            

            </div>

    )}


};
