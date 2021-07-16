import React from 'react';
import icon from '../../assets/icon.png'
import phn from '../../assets/phn.png'
import './featuresec.css'
import { Link } from "react-router-dom";

const Home =()=>{
    return(
        <section>
        <div className="section-header">
            <h2>Features</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, quisquam!</p>
        </div>
        <div className="container">
              {/* container left */}
                <div className="red">
                    <div className="green">
                        <div className="blue"><span className="dot-l" id='ld'><div className="green"><img src={icon} alt="" id='ldot'/></div> </span>
                            <div className="red"> <h3 id='l'>  Feature 1 </h3><p id='lp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, voluptatum?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, obcaecati.</p></div>
                        </div>
                    </div>

                    <div className="green">
                        <div className="blue"><span className="dot-l" id='ld'><div className="green"><img src={icon} alt="" id='ldot'/></div> </span>
                            <div className="red"><h3 id='l'> Feature 2</h3><p id='lp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nihil.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, obcaecati.</p></div>
                        </div>
                    </div>
                </div>



            {/* container middle */}
            <div className="green">
                <img src={phn} alt="" id="ip" />
            </div>


            {/* container right */}
            <div className="red">
                    <div className="green"> 
                    <div className="blue"><span className="dot-r" id='rd'><div className="green"><img src={icon} alt="" id='rdot'/></div> </span>
                        <div className="red"><h3 id='r'>Feature 3</h3><p id='rp'>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, obcaecati.</p></div>                                          	
                        </div>
                    </div>
                    
                    <div className="green"> 
                        <div className="blue"><span className="dot-r" id='rd'><div className="green"><img src={icon} alt="" id='rdot'/></div> </span> 
                        <div className="red"><h3 id='r'> Feature 4</h3><p id='rp'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, doloremque!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, obcaecati.</p></div>                                              
                        </div>
                    </div>
            </div>

        
        </div>


        </section>
 
    )
}

export default Home;












