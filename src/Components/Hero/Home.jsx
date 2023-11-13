import React from 'react';
import './Home.css';
import me2 from '../../Assets/me2.png';
import skill1 from '../../Assets/JAVASCRIPT.png';
import skill2 from '../../Assets/REACT.png';
import skill3 from '../../Assets/VUE.png';
import { Typewriter } from 'react-simple-typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Home() {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY PORTOFOLIO</h3>
            <h1>
              Hello, I'm <span>Lorena Raluca Zota</span>
            </h1>
            <h2>
              a{' '}
              <span>
                <Typewriter
                  words={['Frontend Developer', 'Professional Coder']}
                  loop={0}
                  cursor
                  cursorStyle='|'
                  typeSpeed={70}
                  deleteSpeed={70}
                  delaySpeed={1500}
                />
              </span>
            </h2>
            <p>
              “Without ambition one starts nothing. Without work one finishes
              nothing. The prize will not be sent to you. You have to win it.”
            </p>
            <br />
            <p>
              Hi! I am an ambitious Frontend Developer with a strong desire to
              advance my career. Proficient in HTML, CSS, Sass/SCSS, JS, and
              Git, I craft visually stunning and responsive user interfaces.
              Experienced in popular frameworks like Vue and React, I leverage
              my power to create dynamic web applications. Continuously seeking
              opportunities to learn and grow, I embrace challenges with
              enthusiasm and stay updated on the latest web technologies. With a
              passion for frontend development, I excel at delivering
              high-quality code and I am committed to creating exceptional user
              experiences.
              <br />
              <br />- As a dedicated frontend developer, I bring a passion for
              self-improvement and a keen eye for detail to every project. With
              a strong desire to continually surpass my own achievements, I
              thrive on staying abreast of the latest industry trends and
              technologies.
              <br />- Whether it's crafting pixel-perfect layouts or optimizing
              website performance, I approach each task with precision and
              enthusiasm. My goal is not just to meet expectations but to exceed
              them, making every user interaction a memorable and delightful
              experience.
              <br />- Let's work together to create captivating and successful
              web products!
            </p>
            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>YOU CAN FIND ME</h4>
                <div className='button'>
                  <a
                   href='https://www.facebook.com/ZotaLorena'
                    target='_blank'
                  >
                    <button className='btn_shadow'>
                    <FontAwesomeIcon icon="fa-brands fa-facebook" size="lg" />
                    </button>
                  </a>

                  <a href='https://www.instagram.com/...' target='_blank'>
                    <button className='btn_shadow'>
                    <FontAwesomeIcon icon="fa-brands fa-instagram" size="lg" />
                    </button>
                  </a>

                  <a href='https://www.linkedin.com/in/lorena-raluca-zota/' target='_blank'>
                    <button className='btn_shadow'>
                    <FontAwesomeIcon icon="fa-brands fa-linkedin" size="lg" />
                    </button>
                  </a>
                </div>
              </div>
              <div className='col_1'>
                <h4>BEST SKILL ON</h4>
                <button className='btn_shadow'>
                  <img src={skill1} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill3} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill2} alt='' />
                </button>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={me2} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
