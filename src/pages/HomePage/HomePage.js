import React from "react";
import "./HomePage.css";
import homeimage1 from "../HomePage/PicturesHome/image 111.png";
import services1 from "../HomePage/PicturesHome/kebab-set-table 1.png";
import services2 from "../HomePage/PicturesHome/charming-female-blowing-candles-birthday-cake-after-making-her-wish-party 1.png";
import services3 from "../HomePage/PicturesHome/happy-man-wife-sunny-day 1.png";
import services4 from "../HomePage/PicturesHome/group-friends-eating-restaurant 1.png";
import food1 from "../HomePage/PicturesHome/mid-shot-chef-holding-plate-with-pasta-making-ok-sign 1.png";
import food2 from "../HomePage/PicturesHome/sour-curry-with-snakehead-fish-spicy-garden-hot-pot-thai-food 1.png";
import food3 from "../HomePage/PicturesHome/sadj-iron-pot-with-various-salads 1.png";
import user1 from "../HomePage/PicturesHome/Ellipse 19.png";
import user2 from "../HomePage/PicturesHome/Image1.png";
import user3 from "../HomePage/PicturesHome/Image.png";
import blog1 from "../HomePage/PicturesHome/pexels-andra-918581 1.png";
import blog2 from "../HomePage/PicturesHome/pexels-sebastian-coman-photography-3791088 1.png";
import blog3 from "../HomePage/PicturesHome/pexels-leonardo-luz-13998974 1.png";
import blog4 from "../HomePage/PicturesHome/pexels-katerina-holmes-5908226 1.png";
import blog5 from "../HomePage/PicturesHome/pexels-suzy-hazelwood-2966196 1.png";

function HomePage() {
  return (
    <div className="header-home">
      <div className="background-div">
        <div className="intro-home">
          <h1>Best food for your taste</h1>
          <p className="centered-text">
            Discover delectable cuisine and unforgettable moments in our
            welcoming, culinary haven.
          </p>
        </div>
        <div className="button-home">
          <button className="header-button">Book A Table</button>
          <button className="header-button">Explore Menu</button>
        </div>
      </div>
      <div>
        <div className="browse">
          <h1>Browse Our Menu</h1>
        </div>
        <div className="hero">
          <div className="home-item">
            <svg
              className="icon-coffee"
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="50"
              viewBox="0 0 48 50"
              fill="none"
            >
              <g clip-path="url(#clip0_0_1215)">
                <path
                  d="M20 3V10"
                  stroke="#474747"
                  stroke-width="5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 5V12"
                  stroke="#474747"
                  stroke-width="5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M30 5V12"
                  stroke="#474747"
                  stroke-width="5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M37 23H45V31C45 33.209 43.209 35 41 35H37"
                  stroke="#474747"
                  stroke-width="5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M25 47H15C8.373 47 3 41.627 3 35V19H37V35C37 41.627 31.627 47 25 47Z"
                  stroke="#474747"
                  stroke-width="5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M28 27H18V37H28V27Z"
                  stroke="#474747"
                  stroke-width="5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M23 19V27"
                  stroke="#474747"
                  stroke-width="5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_0_1215">
                  <rect width="48" height="50" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <h3>Breakfast</h3>
            <p>
              In the new era of technology we look in the future with certainty
              and pride for our life.
            </p>
            <span>Explore Menu</span>
          </div>

          <div className="home-item">
            <svg
              className="icon-coffee"
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
            >
              <circle opacity="0.07" cx="50" cy="50" r="50" fill="#4D592B" />
              <path
                d="M37.1414 68.8498V72.3717C37.1414 73.0688 37.4183 73.7373 37.9112 74.2302C38.4041 74.7231 39.0726 75 39.7697 75H60.796C61.4931 75 62.1616 74.7231 62.6545 74.2302C63.1474 73.7373 63.4243 73.0688 63.4243 72.3717V68.8498C67.4197 66.5431 70.7375 63.2253 73.0443 59.2299C75.3511 55.2345 76.5656 50.7024 76.5657 46.0889C76.5657 45.3918 76.2888 44.7233 75.7959 44.2304C75.303 43.7375 74.6345 43.4606 73.9374 43.4606C73.8893 41.8514 73.429 40.2814 72.6007 38.9009C71.7724 37.5204 70.6038 36.3755 69.2065 35.5757C68.8715 33.2863 67.7224 31.1944 65.9701 29.6835C64.2178 28.1725 61.9796 27.3438 59.6658 27.3492C58.7786 27.3477 57.8949 27.4625 57.0375 27.6909C55.2285 25.9637 52.8235 25 50.3223 25C47.8211 25 45.4161 25.9637 43.607 27.6909C42.7496 27.4625 41.866 27.3477 40.9787 27.3492C38.6559 27.3311 36.405 28.1541 34.6417 29.6662C32.8784 31.1783 31.7218 33.2773 31.3855 35.5757C29.9833 36.3722 28.8094 37.5157 27.9764 38.8964C27.1433 40.2771 26.6791 41.8488 26.6283 43.4606C25.9312 43.4606 25.2627 43.7375 24.7698 44.2304C24.2769 44.7233 24 45.3918 24 46.0889C24.0001 50.7024 25.2146 55.2345 27.5214 59.2299C29.8282 63.2253 33.146 66.5431 37.1414 68.8498ZM34.8023 39.9387L36.9837 39.2553L36.5632 36.8899C36.5701 36.3238 36.6884 35.7646 36.9113 35.2443C37.1343 34.724 37.4576 34.2527 37.8628 33.8573C38.2679 33.4619 38.747 33.1502 39.2726 32.94C39.7982 32.7297 40.3601 32.6251 40.9262 32.632C41.6852 32.6277 42.4339 32.8081 43.1076 33.1577L45.2365 34.3404L46.5507 32.3167C46.9617 31.7041 47.5171 31.2021 48.168 30.855C48.8189 30.5079 49.5452 30.3263 50.2828 30.3263C51.0205 30.3263 51.7468 30.5079 52.3977 30.855C53.0486 31.2021 53.604 31.7041 54.015 32.3167L55.3292 34.3404L57.4581 33.1577C58.1318 32.8081 58.8805 32.6277 59.6395 32.632C60.7764 32.6177 61.8733 33.0504 62.6942 33.837C63.5152 34.6235 63.9944 35.7009 64.0288 36.8373L63.6083 39.0713L65.7634 39.8073C66.5585 40.0561 67.261 40.5368 67.7808 41.1878C68.3007 41.8387 68.6141 42.6302 68.6808 43.4606H31.8849C31.9516 42.6302 32.265 41.8387 32.7849 41.1878C33.3047 40.5368 34.0072 40.0561 34.8023 39.8073V39.9387ZM71.1514 48.7172C70.7129 52.1582 69.4299 55.4372 67.4167 58.2621C65.4036 61.087 62.7228 63.3699 59.6133 64.9074C59.1758 65.1278 58.8087 65.4661 58.5533 65.884C58.2978 66.302 58.1643 66.783 58.1677 67.2728V69.7434H42.398V67.2728C42.4014 66.783 42.2679 66.302 42.0124 65.884C41.757 65.4661 41.3899 65.1278 40.9524 64.9074C37.8429 63.3699 35.1621 61.087 33.149 58.2621C31.1358 55.4372 29.8528 52.1582 29.4143 48.7172H71.1514Z"
                fill="#474747"
              />
            </svg>
            <h3>Main Dishes</h3>
            <p>
              In the new era of technology we look in the future with certainty
              and pride for our life.
            </p>
            <span>Explore Menu</span>
          </div>

          <div className="home-item">
            <svg
              className="icon-coffee"
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
            >
              <circle opacity="0.07" cx="50" cy="50" r="50" fill="#4D592B" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M64.4153 25C65.1182 25.0003 65.813 25.1488 66.4546 25.4357C67.0962 25.7227 67.6701 26.1417 68.1388 26.6654C68.6076 27.1891 68.9606 27.8057 69.175 28.4751C69.3893 29.1444 69.4602 29.8514 69.3828 30.55L64.9403 70.55C64.8049 71.7734 64.223 72.9039 63.306 73.725C62.3889 74.5461 61.2013 75.0001 59.9703 75H39.4453C38.2144 75.0001 37.0267 74.5461 36.1097 73.725C35.1927 72.9039 34.6107 71.7734 34.4753 70.55L30.0303 30.55C29.953 29.8512 30.0239 29.144 30.2384 28.4745C30.4529 27.805 30.8062 27.1882 31.2752 26.6645C31.7442 26.1407 32.3184 25.7218 32.9603 25.435C33.6022 25.1482 34.2973 25 35.0003 25H64.4153ZM64.4153 30H35.0003L36.0628 39.5575C36.9604 39.3865 37.8682 39.2746 38.7803 39.2225C41.7778 39.0475 45.9203 39.4075 50.6928 41.4525C54.6703 43.1575 58.0278 43.4225 60.3428 43.285C61.2313 43.2378 62.1139 43.1123 62.9803 42.91L64.4153 30ZM62.4028 48.1C61.8728 48.175 61.2803 48.24 60.6353 48.275C57.6378 48.4525 53.4953 48.0925 48.7228 46.05C44.7453 44.3425 41.3878 44.0775 39.0728 44.215C38.2468 44.2605 37.4258 44.3726 36.6178 44.55L39.4453 70H59.9703L62.4028 48.1ZM47.2078 52.5C47.2078 53.163 46.9444 53.7989 46.4756 54.2678C46.0068 54.7366 45.3709 55 44.7078 55C44.0448 55 43.4089 54.7366 42.9401 54.2678C42.4712 53.7989 42.2078 53.163 42.2078 52.5C42.2078 51.837 42.4712 51.2011 42.9401 50.7322C43.4089 50.2634 44.0448 50 44.7078 50C45.3709 50 46.0068 50.2634 46.4756 50.7322C46.9444 51.2011 47.2078 51.837 47.2078 52.5ZM52.2078 62.5C52.8709 62.5 53.5068 62.2366 53.9756 61.7678C54.4444 61.2989 54.7078 60.663 54.7078 60C54.7078 59.337 54.4444 58.7011 53.9756 58.2322C53.5068 57.7634 52.8709 57.5 52.2078 57.5C51.5448 57.5 50.9089 57.7634 50.4401 58.2322C49.9712 58.7011 49.7078 59.337 49.7078 60C49.7078 60.663 49.9712 61.2989 50.4401 61.7678C50.9089 62.2366 51.5448 62.5 52.2078 62.5Z"
                fill="#474747"
              />
            </svg>
            <h3>Drinks</h3>
            <p>
              In the new era of technology we look in the future with certainty
              and pride for our life.
            </p>
            <span>Explore Menu</span>
          </div>

          <div className="home-item">
            <svg
              className="icon-coffee"
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
            >
              <circle opacity="0.07" cx="50" cy="50" r="50" fill="#4D592B" />
              <path
                d="M52.9715 32.3771L52.9296 32.2479L53.1426 32.523C53.3254 32.7276 53.4763 32.6823 53.6054 32.523C53.6054 32.523 54.7341 31.2266 53.8503 29.7173C53.3639 28.7178 51.4454 26.3398 50.4358 25.5952C48.6112 24.4363 47.434 25.3268 47.434 25.3268C47.2881 25.4358 47.1807 25.5952 47.2881 25.7427L47.5732 26.0362C44.1302 26.7255 43.6237 29.407 43.399 30.5944L43.3621 30.7906L42.8993 34.0105C42.7517 35.1341 43.3621 35.7429 44.4354 35.7429H47.9371C49.1579 35.7596 51.7003 35.7915 52.9715 32.3771Z"
                fill="#474747"
              />
              <path
                d="M41.7049 30.5525L41.3309 33.1552L29.4777 44.1197C29.0278 44.4953 28.6916 44.989 28.5067 45.5451C28.4353 45.7527 28.3842 45.9667 28.3541 46.1841V47.0394C28.8085 47.0763 29.3334 47.0394 29.9053 46.9119L67.4104 36.1521C67.5352 36.1163 67.6666 36.1099 67.7942 36.1335C67.9218 36.157 68.0423 36.2099 68.146 36.288C68.2497 36.366 68.3339 36.4671 68.3919 36.5832C68.4499 36.6993 68.4802 36.8273 68.4804 36.9571V45.0839C68.4812 45.2639 68.4239 45.4394 68.3169 45.5841C68.2099 45.7289 68.059 45.8352 67.8867 45.8872C60.709 48.0506 32.1743 56.6488 31.4733 56.8383C30.6801 57.0563 28.9243 57.385 28.3541 57.3112V62.5687C28.8656 62.6391 29.3972 62.619 29.9053 62.4831L67.4088 51.6244C67.5336 51.5882 67.6652 51.5816 67.793 51.6051C67.9209 51.6285 68.0415 51.6813 68.1455 51.7594C68.2494 51.8375 68.3338 51.9386 68.3919 52.0549C68.45 52.1712 68.4803 52.2994 68.4804 52.4293V60.2309L69.7449 59.8687L69.7566 59.8653L69.827 59.8418C70.2376 59.7066 70.6328 59.5284 71.006 59.3102C71.7657 58.8574 71.8344 58.5505 71.8344 58.5119V36.6703C71.8344 36.3047 71.6835 35.6574 71.2861 35.0318C70.9138 34.4449 70.3855 33.9703 69.6929 33.7405L55.8456 30.4938C55.7844 29.9413 55.6097 29.4075 55.3325 28.9258C54.992 28.2533 54.3212 27.3326 53.6739 26.541L70.523 30.4904C70.5625 30.5002 70.6017 30.5113 70.6404 30.524C72.2587 31.0271 73.3974 32.1004 74.1169 33.234C74.8212 34.3409 75.1885 35.6037 75.1885 36.6703V58.5119C75.1885 60.4908 73.6071 61.6648 72.7182 62.193C72.0958 62.5596 71.4336 62.8539 70.7444 63.0701L70.7008 63.0835L70.6857 63.0869L70.6806 63.0886C70.6806 63.0886 70.4358 63.159 70.6773 63.0886L29.7443 74.8378C29.7204 74.8445 29.6964 74.8507 29.6722 74.8563C28.4765 75.1414 27.1181 75.0659 26.1169 74.0429C25.2197 73.1273 25 71.8209 25 70.6553V46.112L25.0017 46.0214V45.9963L25.0067 45.9594C25.0167 45.8097 25.0352 45.6608 25.0621 45.5133C25.109 45.2416 25.1912 44.8743 25.3354 44.4534C25.7042 43.364 26.3552 42.3919 27.2221 41.636L42.9794 27.0626C42.9435 27.114 42.9082 27.166 42.8738 27.2185C42.1091 28.4025 41.876 29.6385 41.7619 30.2439L41.7552 30.2841C41.7394 30.3738 41.7226 30.4632 41.7049 30.5525Z"
                fill="#474747"
              />
            </svg>
            <h3>Desserts</h3>
            <p>
              In the new era of technology we look in the future with certainty
              and pride for our life.
            </p>
            <span>Explore Menu</span>
          </div>
        </div>
        <div className="contact">
          <div>
            <div className="img-home">
              <img src={homeimage1} />
            </div>
            <div className="visit">
              <h1>Come and visit us</h1>
              <div className="hotline">
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
              <div className="hotline">
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
              <div className="hotline">
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

          <div className="text-home">
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
              and dedication, strives to make every visit an unforgettable
              event.
            </p>
            <button>More About Us</button>
          </div>
        </div>
        <div className="services">
          <h1>We also offer unique services for your events</h1>
          <div className="advertisement">
            <div className="services-type">
              <img src={services1} alt="" />
              <h3>Caterings</h3>
              <p>
                In the new era of technology we look in the future with
                certainty for life.
              </p>
            </div>
            <div className="services-type">
              <img src={services2} alt="" />
              <h3>Birthdays</h3>
              <p>
                In the new era of technology we look in the future with
                certainty for life.
              </p>
            </div>
            <div className="services-type">
              <img src={services3} alt="" />
              <h3>Weddings</h3>
              <p>
                In the new era of technology we look in the future with
                certainty for life.
              </p>
            </div>
            <div className="services-type">
              <img src={services4} alt="" />
              <h3>Events</h3>
              <p>
                In the new era of technology we look in the future with
                certainty for life.
              </p>
            </div>
          </div>
        </div>
        <div className="fastest-food">
          <div className="food-home">
            <div className="chef">
              <img src={food1} alt="" />
            </div>
            <div className="shrimp">
              <img src={food2} alt="" />
              <img src={food3} alt="" />
            </div>
            <div className="delivery">
              <h1>Fastest Food Delivery in City</h1>
              <p>
                Our visual designer lets you quickly and of drag a down your way
                to customapps for both keep desktop.
              </p>
              <div className="contact-delivery">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="#AD343E"
                >
                  <path
                    d="M7.53504 5.02349V7.53516L9.41879 9.41891M13.1863 7.53516C13.1863 10.6563 10.6561 13.1864 7.53504 13.1864C4.41394 13.1864 1.88379 10.6563 1.88379 7.53516C1.88379 4.41406 4.41394 1.88391 7.53504 1.88391C10.6561 1.88391 13.1863 4.41406 13.1863 7.53516Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>Delivery within 30 minutes</p>
              </div>
              <div className="contact-delivery">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="#AD343E"
                >
                  <path
                    d="M5.65131 8.79099L9.41881 5.02349M5.96529 5.33745H5.97157M9.10487 8.47704H9.11115M11.9305 13.1864V3.13974C11.9305 2.44617 11.3682 1.88391 10.6746 1.88391H4.39548C3.7019 1.88391 3.13965 2.44617 3.13965 3.13974V13.1864L5.33736 11.9306L7.53506 13.1864L9.73277 11.9306L11.9305 13.1864ZM6.27923 5.33745C6.27923 5.51085 6.13867 5.65141 5.96527 5.65141C5.79188 5.65141 5.65131 5.51085 5.65131 5.33745C5.65131 5.16406 5.79188 5.02349 5.96527 5.02349C6.13867 5.02349 6.27923 5.16406 6.27923 5.33745ZM9.41881 8.47704C9.41881 8.65043 9.27825 8.79099 9.10486 8.79099C8.93146 8.79099 8.7909 8.65043 8.7909 8.47704C8.7909 8.30364 8.93146 8.16308 9.10486 8.16308C9.27825 8.16308 9.41881 8.30364 9.41881 8.47704Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>Best Offer & Prices</p>
              </div>
              <div className="contact-delivery">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="#AD343E"
                >
                  <path
                    d="M1.88379 1.88385H3.13962L3.39079 3.13968M4.39546 8.16302H10.6746L13.1863 3.13968H3.39079M4.39546 8.16302L3.39079 3.13968M4.39546 8.16302L2.95571 9.60276C2.56014 9.99833 2.8403 10.6747 3.39971 10.6747H10.6746M10.6746 10.6747C9.98104 10.6747 9.41879 11.2369 9.41879 11.9305C9.41879 12.6241 9.98104 13.1863 10.6746 13.1863C11.3682 13.1863 11.9305 12.6241 11.9305 11.9305C11.9305 11.2369 11.3682 10.6747 10.6746 10.6747ZM5.65129 11.9305C5.65129 12.6241 5.08903 13.1863 4.39546 13.1863C3.70188 13.1863 3.13962 12.6241 3.13962 11.9305C3.13962 11.2369 3.70188 10.6747 4.39546 10.6747C5.08903 10.6747 5.65129 11.2369 5.65129 11.9305Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>Online Services Available</p>
              </div>
            </div>
          </div>
        </div>
        <div className="customers">
          <h1>What Our Customers Say</h1>
          <div className="Customers-Say">
            <div className="user">
              <h1>“The best restaurant”</h1>
              <p>
                Last night, we dined at place and were simply blown away. From
                the moment we stepped in, we were enveloped in an inviting
                atmosphere and greeted with warm smiles.
              </p>
              <div className="user-infor">
                <img src={user1} alt="" />
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
                <img src={user2} alt="" />
                <div className="infor">
                  <h3>Matt Cannon</h3>
                  <span>San Diego, CA</span>
                </div>
              </div>
            </div>
            <div className="user">
              <h1>“One of a kind restaurant”</h1>
              <p>
                The culinary experience at place is first to none. The
                atmosphere is vibrant, the food - nothing short of
                extraordinary. The food was the highlight of our evening. Highly
                recommended.
              </p>
              <div className="user-infor">
                <img src={user3} alt="" />
                <div className="infor">
                  <h3>Andy Smith</h3>
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blog">
          <h1>Our Blog & Articles</h1>
          <div className="illustrating">
            <div className="hamburger">
              <img src={blog1} alt="" />
              <span id="p0">January 3, 2023</span>
              <p id="p1">
                The secret tips & tricks to prepare a perfect burger & pizza for
                our customers
              </p>
              <p id="p-special">
                Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim
                semper adipiscing massa gravida nisi cras enim quis nibholm
                varius amet gravida ut facilisis neque egestas.
              </p>
            </div>
            <div className="potato">
              <div className="pizza">         
                <img src={blog5} alt="" />
                <span>January 3, 2023</span>
                <p>How to prepare the perfect french fries in an air fryer</p>
              </div>
              <div className="pizza">
                <img src={blog2} alt="" />
                <span>January 3, 2023</span>
                <p>7 delicious cheesecake recipes you can prepare</p>
              </div>
            </div>
            <div className="potato">
              <div className="pizza">
                <img src={blog3} alt="" />
                <span>January 3, 2023</span>
                <p>How to prepare delicious chicken tenders</p>
              </div>
              <div className="pizza">
                <img src={blog4} alt="" />
                <span>January 3, 2023</span>
                <p>5 great pizza restaurants you should visit this city</p>
              </div>
            </div>
          </div>
        </div>
        <div>asfjisjdfokasofjkqj3nsidnff
          fnkasmdfoasdkf0kawoegjiowmnevbkdsm
        </div>
      </div>
    </div>
  );
}

export default HomePage;
