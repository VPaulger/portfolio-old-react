import React from "react";
import Slider from "react-slick";

class ExperienceSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4
    };
    return (
      <Slider {...settings}>
        <div class="experienceBlocks">
         <a href="vaughn-paulger-project-02/dist/index.html" target="_blank">
           <div class="image1">
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <img src="./assets.boomtown.png"/>
           </div>
         </a>
         <h3>Instanews</h3>
         <p>Web App Development</p>
       </div>
       <div class="experienceBlocks">
         <a href="vaughn-paulger-project-02/dist/index.html" target="_blank">
           <div class="image1">
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <img src="http://pngimg.com/uploads/simpsons/simpsons_PNG88.png"/>
           </div>
         </a>
         <h3>Instanews</h3>
         <p>Web App Development</p>
       </div>
       <div class="experienceBlocks">
         <a href="vaughn-paulger-project-02/dist/index.html" target="_blank">
           <div class="image1">
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <img src="http://pngimg.com/uploads/simpsons/simpsons_PNG88.png"/>
           </div>
         </a>
         <h3>Instanews</h3>
         <p>Web App Development</p>
       </div>
      </Slider>
    );
  }
}

export default ExperienceSlider