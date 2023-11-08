import React from "react";
import "./PagesBistro.css";
import blog1 from "./PagesPictures/pexels-ivan-samkov-8951199 1.png"
import blog2 from "./PagesPictures/pexels-skyler-ewing-10307512 1.png"
import blog3 from "./PagesPictures/pexels-suzy-hazelwood-2966196 1.png"
import blog4 from "./PagesPictures/pexels-leonardo-luz-13998974 1.png"
import blog5 from "./PagesPictures/pexels-marta-dzedyshko-2067396 1.png"
import blog6 from "./PagesPictures/pexels-valeria-boltneva-1833337 1.png"
import blog7 from "./PagesPictures/pexels-sebastian-coman-photography-3791088 1.png"
import blog8 from "./PagesPictures/pexels-katerina-holmes-5908226 1.png"
import blog9 from "./PagesPictures/pexels-irina-bogodukhova-9032910 1.png"
import blog10 from "./PagesPictures/pexels-nishant-aneja-2955819 1.png"
import blog11 from "./PagesPictures/pexels-jan-n-g-u-y-e-n-🍁-2664216 1.png"
import blog12 from "./PagesPictures/pexels-igor-ovsyannykov-205961 1.png"
function PagesBistro() {
  return (
    <div className="blog-pages">
      <div className="text">
        <div className="title">
          <h3>Our Blog & Articles</h3>
        </div>
        <p className="centered-text">
          We consider all the drivers of change gives you the components you
          need to change to create a truly happens.
        </p>
      </div>

      <div className="our-blog">
        <div className="articles">
            <div className="blog-intro">
                <img src={blog1}/>
                <span>January 3, 2023</span>
                <p>How to prepare a delicious gluten free sushi</p>
            </div>
            <div className="blog-intro">
                <img src={blog2}/>
                <span>January 3, 2023</span>
                <p>Exclusive baking lessons from the pastry king</p>
            </div>
            <div className="blog-intro">
                <img src={blog3}/>
                <span>January 3, 2023</span>
                <p>How to prepare the perfect fries in an air fryer</p>
            </div>
            <div className="blog-intro">
                <img src={blog4}/>
                <span>January 3, 2023</span>
                <p>How to prepare delicious chicken tenders</p>
            </div>
        </div>
        <div className="articles">
        <div className="blog-intro">
                <img src={blog5}/>
                <span>January 3, 2023</span>
                <p>5 great cooking gadgets you can buy to save time</p>
            </div>
            <div className="blog-intro">
                <img src={blog6}/>
                <span>January 3, 2023</span>
                <p>The secret tips & tricks to prepare a perfect burger</p>
            </div>
            <div className="blog-intro">
                <img src={blog7}/>
                <span>January 3, 2023</span>
                <p>7 delicious cheesecake recipes you can prepare</p>
            </div>
            <div className="blog-intro">
                <img src={blog8}/>
                <span>January 3, 2023</span>
                <p>5 great pizza restaurants you should visit this city</p>
            </div>
        </div>
        <div className="articles">
        <div className="blog-intro">
                <img src={blog9}/>
                <span>January 3, 2023</span>
                <p>5 great cooking gadgets you can buy to save time</p>
            </div>
            <div className="blog-intro">
                <img src={blog10}/>
                <span>January 3, 2023</span>
                <p>How to prepare a delicious gluten free sushi</p>
            </div>
            <div className="blog-intro">
                <img src={blog11}/>
                <span>January 3, 2023</span>
                <p>Top 20 simple and quick desserts for kids</p>
            </div>
            <div className="blog-intro">
                <img src={blog12}/>
                <span>January 3, 2023</span>
                <p>Top 20 simple and quick desserts for kids</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default PagesBistro;
