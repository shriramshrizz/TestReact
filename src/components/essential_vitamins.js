import React from "react";
import probiotics_img from '../Assets/f2-1.png'

const EssentialVitamins = () => {
  const title = "Essential Vitamins"

  return (
      <div className="container">

        <div className="section-title">
        <h2>{title}</h2>
        </div>

        <div className="sections">

            <div className="explore-section">
                <p>Online Medical Supplies</p>
                <p>Get Your Vitamins & Minerals</p>
                <button style={explore_style}>Explore</button>
            </div>

            <div className="probiotics-section">
                <img
                    src={probiotics_img}
                    alt="probiotics_img"
                    // style={{height: '100px'}}
                />
            </div>

            <div className="icon-section">

                <div>
                    <h4>Vitamins</h4>
                    <p>Increased Vitamins and minerals in your diet</p>
                </div>
                
                <div>
                    <h4>Weight Loss</h4>
                    <p>Weight Loss</p>
                    <p>Find scientifically proven solutions</p>
                </div>

                <div>
                    <h4>Functional Foods</h4>
                    <p>Functional Foods</p>
                    <p>From protein powers to baby formula</p>
                </div>

            </div>

        </div>

      </div>
  );
};

const explore_style = {
    backgroundColor: 'lightGreen',
}
export default EssentialVitamins;
