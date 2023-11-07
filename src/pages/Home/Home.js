import React from 'react';

import './Home.css';

import { motion } from 'framer-motion';

import homeImageRight from '../../assets/img/home_img_1.jpeg';
import homeImageLeft from '../../assets/img/home_img_2.jpeg';
import star1 from '../../assets/img/Star1.svg';
import star2 from '../../assets/img/Star2.svg';
import bird from '../../assets/img/bird.svg'

import AnchorButton from '../../components/AnchorButton/AnchorButton';

function Home() {
    return (
        <section className='home-section-holder'>
            <article className='about-section'>
                <div className='img-holder'>
                    <img 
                        src={homeImageLeft}
                        alt='Student studying online, through e-learning'
                        className='student-img'
                    />
                    <motion.img
                        src={bird}
                        alt='Sykorka Bird drawing'
                        className='bird'
                        whileHover={{ scale: 1.2 }}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: [0, -1, 1, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    />
                </div>
                <div className='content-holder'>
                    <h1>Where knowledge takes flight!</h1>
                    <motion.img
                        src={star1}
                        whileHover={{ scale: 1.2 }}
                        className='stars-img'
                        id='pink-star'
                        alt='Star'
                        />
                    <p className='about-text'>
                        We are dedicated to providing high-quality, accessible education in a wide range of subjects. The name 'Sýkorka' is inspired by the lively and curious bird known for its intelligence and adaptability, just like our approach to learning.
                    </p>
                    <motion.img
                        src={star2}
                        whileHover={{ scale: 1.2 }}
                        className='stars-img'
                        id='yellow-star'
                        alt='Star'
                        />
                    <AnchorButton className='btn-learn-more' to='About' text='Learn More' />
                </div>
                <div className='img-holder'>
                    <img 
                        src={homeImageRight} 
                        alt='Uliana Synytsia - Founder of Sykorka School'
                        className='teacher-img'
                    />
                </div>
            </article>
        </section>
    );
  }
  
  export default Home;