import React from "react";
import "./Menu.css";
import image1 from "../Menu/PicturesMenu/pexels-daniela-constantini-5591664 1.png";
import image2 from "../Menu/PicturesMenu/pexels-maksim-goncharenok-4773769 1.png";
import image3 from "../Menu/PicturesMenu/pexels-nadin-sh-12956424 1.png";
import image4 from "../Menu/PicturesMenu/pexels-ruslan-khmelevsky-7845121 1.png";
import image5 from "../Menu/PicturesMenu/pexels-bam-awey-5335918 1.png";
import image6 from "../Menu/PicturesMenu/pexels-roman-odintsov-5061254 1.png";
import image7 from "../Menu/PicturesMenu/pexels-pixabay-327158 1.png";
import image8 from "../Menu/PicturesMenu/pexels-nicola-barts-7937386 1.png";
import imagelogo1 from "../Menu/PicturesMenu/anh1.png";
import imagelogo2 from "../Menu/PicturesMenu/anh2.png";
import imagelogo3 from "../Menu/PicturesMenu/anh3.png";
import imagelogo4 from "../Menu/PicturesMenu/anh4.png";
import imagelogo5 from "../Menu/PicturesMenu/anh5.png";
import imagelogo6 from "../Menu/PicturesMenu/anh6.png";
import imagelogo7 from "../Menu/PicturesMenu/anh7.png";
import imagelogo8 from "../Menu/PicturesMenu/anh8.png";
import imagelogo9 from "../Menu/PicturesMenu/anh9.png";

function Menu() {
  return (
    <div>
      <div className="text">
        <div className="title">
          <h3>Our Menu</h3>
        </div>
        <p className="centered-text">
          We consider all the drivers of change gives you the components you
          need to change to create a truly happens
        </p>
      </div>

      <div>
        <div className="container">
          <button className="custom-button">All</button>
          <button className="custom-button">Breakfast</button>
          <button className="custom-button">Main Dishes</button>
          <button className="custom-button">Drinks</button>
          <button className="custom-button">Desserts</button>
        </div>

        <div className="menu-container">
          <div className="menu-item">
            <img src={image1} />
            <span>9.99$</span>
            <h3>Fried Eggs</h3>
            <p>Made with eggs, lettuce, salt, oil and other ingredients.</p>
          </div>
          <div className="menu-item">
            <img src={image2} />
            <span>15.99$</span>
            <h3>Hawalian Pizza</h3>
            <p>Made with eggs, lettuce, salt, oil and other ingredients.</p>
          </div>
          <div className="menu-item">
            <img src={image3} />
            <span>7.25$</span>
            <h3>Martinez Cocktail</h3>
            <p>Made with eggs, lettuce, salt, oil and other ingredients.</p>
          </div>
          <div className="menu-item">
            <img src={image4} />
            <span>20.99$</span>
            <h3>Butterscotch Cake</h3>
            <p>Made with eggs, lettuce, salt, oil and other ingredients.</p>
          </div>
          <div className="menu-item">
            <img src={image5} />
            <span>5.89$</span>
            <h3>Mint Lemonade</h3>
            <p>Made with eggs, lettuce, salt, oil and other ingredients.</p>
          </div>
          <div className="menu-item">
            <img src={image6} />
            <span>18.05$</span>
            <h3>Chocolate Icecream</h3>
            <p>Made with eggs, lettuce, salt, oil and other ingredients.</p>
          </div>
          <div className="menu-item">
            <img src={image7} />
            <span>12.55$</span>
            <h3>Cheese Burger </h3>
            <p>Made with eggs, lettuce, salt, oil and other ingredients.</p>
          </div>
          <div className="menu-item">
            <img src={image8} />
            <span>12.99$</span>
            <h3>Classic Waffles</h3>
            <p>Made with eggs, lettuce, salt, oil and other ingredients.</p>
          </div>
        </div>
      </div>

      <div className="order">
        <div className="introduce">
          <h2>You can order through apps</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum
            sed et aliquet aliquet risus tempor semper.
          </p>
        </div>

        <div className="logobox">
          <div className="logo1">
            <img src={imagelogo2} style={{ borderRadius: "20px" }} />
            <img src={imagelogo1} style={{ borderRadius: "20px" }} />
            <img src={imagelogo3} style={{ borderRadius: "20px" }} />
          </div>
          <div className="logo2">
            <img src={imagelogo4} style={{ borderRadius: "20px" }} />
            <img src={imagelogo5} style={{ borderRadius: "20px" }} />
            <img src={imagelogo6} style={{ borderRadius: "20px" }} />
          </div>
          <div className="logo3">
            <img src={imagelogo7} style={{ borderRadius: "20px" }} />
            <img src={imagelogo8} style={{ borderRadius: "20px" }} />
            <img src={imagelogo9} style={{ borderRadius: "20px" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
