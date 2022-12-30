import React from "react";
import '../assets/Css/Homepage.css';
import img from '../assets/images/Homepage-img.jpg';

const Homepage = () => {
    return ( 
        <div className="HomePage">
            <div className="weather-title">
                <h1>Weather.</h1> 
            </div> 
            <div className="weather-title">
                <h1>Weather.</h1> 
            </div>
            <div className="HomePage-img">
                <img src={img} alt="" />
                
            </div>
            <div className="HomePage-card">
                <div>
                   
                        
                </div>
            </div>
            <div className="HomePage-details">

            </div>
        </div>
                            
     );
}
 
export default Homepage;