import React from "react";
import "./About.css";
import about1 from "../About/PicturesAbout/image 111.png";
import about2 from "../About/PicturesAbout/pexels-cottonbro-studio-4252139 1.png";
import aboutuser1 from "../About/PicturesAbout/Ellipse 19.png"
import aboutuser2 from "../About/PicturesAbout/Image1.png"
import aboutuser3 from "../About/PicturesAbout/Image.png"
function About() {
  return (
    <div>
      <div className="about">
        <div className="img-about">
          <img src={about1} />
          <div className="visit-about">
            <h1>Come and visit us</h1>
            <div className="hotline-about">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>(414) 857 - 0107</p>
            </div>
            <div className="hotline-about">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>happytummy@restaurant.com</p>
            </div>
            <div className="hotline-about">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M17.6569 16.6569C16.7202 17.5935 14.7616 19.5521 13.4138 20.8999C12.6327 21.681 11.3677 21.6814 10.5866 20.9003C9.26234 19.576 7.34159 17.6553 6.34315 16.6569C3.21895 13.5327 3.21895 8.46734 6.34315 5.34315C9.46734 2.21895 14.5327 2.21895 17.6569 5.34315C20.781 8.46734 20.781 13.5327 17.6569 16.6569Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</p>
            </div>
          </div>
        </div>
        <div className="text-about">
          <h1>We provide healthy food for your family.</h1>
          <p>
            Our story began with a vision to create a unique dining experience
            that merges fine dining, exceptional service, and a vibrant
            ambiance. Rooted in city's rich culinary culture, we aim to honor
            our local roots while infusing a global palate.
          </p>
          <p>
            At place, we believe that dining is not just about food, but also
            about the overall experience. Our staff, renowned for their warmth
            and dedication, strives to make every visit an unforgettable event.
          </p>
        </div>
      </div>
      <div className="bg-about">
        <div className="icon-about">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="106"
            height="106"
            viewBox="0 0 106 106"
            fill="none"
          >
            <circle cx="53" cy="53" r="53" fill="white" />
            <path
              d="M49.8569 63.8798C48.5248 64.7124 46.7969 63.7547 46.7969 62.1838V45.336C46.7969 43.7652 48.5248 42.8075 49.8569 43.64L63.3351 52.0639C64.5884 52.8473 64.5884 54.6726 63.3351 55.4559L49.8569 63.8798Z"
              fill="#AD343E"
            />
          </svg>
          <p>Feel the authentic & original taste from us</p>
        </div>
      </div>
      <div className="content-about">
        <div className="icon-content">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
          >
            <path
              d="M38 46L6 43V5L38 2V46Z"
              stroke="#474747"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M44 6V42"
              stroke="#474747"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13 29H29"
              stroke="#AD343E"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13 36L29 37"
              stroke="#AD343E"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21 22C24.3137 22 27 19.3137 27 16C27 12.6863 24.3137 10 21 10C17.6863 10 15 12.6863 15 16C15 19.3137 17.6863 22 21 22Z"
              stroke="#AD343E"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div className="text-content">
            <h4>Multi Cuisine</h4>
            <p>
              In the new era of technology we look in the future with certainty
              life.
            </p>
          </div>
        </div>
        <div className="icon-content">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
          >
            <path
              d="M38 22H10V38H38V22Z"
              stroke="#AD343E"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M31 28H17"
              stroke="#AD343E"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M29 12C30.1046 12 31 11.1046 31 10C31 8.89543 30.1046 8 29 8C27.8954 8 27 8.89543 27 10C27 11.1046 27.8954 12 29 12Z"
              fill="#474747"
            />
            <path
              d="M37 12C38.1046 12 39 11.1046 39 10C39 8.89543 38.1046 8 37 8C35.8954 8 35 8.89543 35 10C35 11.1046 35.8954 12 37 12Z"
              fill="#474747"
            />
            <path
              d="M40 4H8C5.79086 4 4 5.79086 4 8V40C4 42.2091 5.79086 44 8 44H40C42.2091 44 44 42.2091 44 40V8C44 5.79086 42.2091 4 40 4Z"
              stroke="#474747"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 10H16"
              stroke="#474747"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4 16H44"
              stroke="#474747"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div className="text-content">
            <h4>Easy To Order</h4>
            <p>
              In the new era of technology we look in the future with certainty
              life.
            </p>
          </div>
        </div>
        <div className="icon-content">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
          >
            <path
              d="M42 28V46H6V28"
              stroke="#474747"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17 2H31"
              stroke="#474747"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M24 28L32.5 19.5"
              stroke="#AD343E"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M24 2V5"
              stroke="#474747"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M24 46C33.9411 46 42 37.9411 42 28C42 18.0589 33.9411 10 24 10C14.0589 10 6 18.0589 6 28C6 37.9411 14.0589 46 24 46Z"
              stroke="#474747"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M24 16V18"
              stroke="#474747"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M36 28H34"
              stroke="#474747"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M32.485 36.485L31.071 35.071"
              stroke="#474747"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M24 40V38"
              stroke="#474747"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.5149 36.485L16.9289 35.071"
              stroke="#474747"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 28H14"
              stroke="#474747"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.5149 19.515L16.9289 20.929"
              stroke="#474747"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div className="text-content">
            <h4>Fast Delivery</h4>
            <p>
              In the new era of technology we look in the future with certainty
              life.
            </p>
          </div>
        </div>
      </div>
      <div className="infor-about">
        <div className="intro-about">
          <h3>A little information for our valuable guest</h3>
          <p>
            At place, we believe that dining is not just about food, but also
            about the overall experience. Our staff, renowned for their warmth
            and dedication, strives to make every visit an unforgettable event.
          </p>
          <div className="about-total">
            <div className="about-number">
              <h2>3</h2>
              <span>Locations</span>
            </div>
            <div className="about-number">
              <h2>1995</h2>
              <span>Founded</span>
            </div>
          </div>
          <div className="about-total">
            <div className="about-number">
              <h2>65+</h2>
              <span>Staff Members</span>
            </div>
            <div className="about-number">
              <h2>100%</h2>
              <span>Satisfied Customers</span>
            </div>
          </div>
        </div>
        <div className="illustrating-about">
          <img src={about2} />
        </div>
      </div>
      <div className="customers">
        <h1>What Our Customers Say</h1>
        <div className="Customers-Say">
          <div className="user">
            <h1>“The best restaurant”</h1>
            <p>
              Last night, we dined at place and were simply blown away. From the
              moment we stepped in, we were enveloped in an inviting atmosphere
              and greeted with warm smiles.
            </p>
            <div className="user-infor">
              <img src={aboutuser1} alt="" />
              <div className="infor">
                <h3>Sophire Robson</h3>
                <span>Los Angeles, CA</span>
              </div>
            </div>
          </div>
          <div className="user">
            <h1>“Simply delicious”</h1>
            <p>
              Place exceeded my expectations on all fronts. The ambiance was
              cozy and relaxed, making it a perfect venue for our anniversary
              dinner. Each dish was prepared and beautifully presented.
            </p>
            <div className="user-infor">
              <img src={aboutuser2} alt="" />
              <div className="infor">
                <h3>Matt Cannon</h3>
                <span>San Diego, CA</span>
              </div>
            </div>
          </div>
          <div className="user">
            <h1>“One of a kind restaurant”</h1>
            <p>
              The culinary experience at place is first to none. The atmosphere
              is vibrant, the food - nothing short of extraordinary. The food
              was the highlight of our evening. Highly recommended.
            </p>
            <div className="user-infor">
              <img src={aboutuser3} alt="" />
              <div className="infor">
                <h3>Andy Smith</h3>
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
