import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import './Footer.css'
import cards from '../../assets/pictures/cardslogo.png';
import search from '../../assets/pictures/searchlogo.png';
import about from '../../assets/pictures/aboutlogo.png';

import cardsSelected from '../../assets/pictures/cardslogobloom.png'
import searchSelected from '../../assets/pictures/searchlogobloom.png'
import aboutSelected from '../../assets/pictures/aboutlogobloom_.png'

function Footer(props) {
    const [selectedPage, setSelectedPage] = useState(null);

    const handleImageClick = (page) => {
        setSelectedPage(page);
      };

  return (
    <div className='footer'>
        <Link to='/main' className='footer-link-main' 
            onClick={() => handleImageClick('main')}>
            <img 
                className='cards-img' 
                src={selectedPage === 'main' ? cardsSelected : cards}
                alt="" />
        </Link>

        <Link to='/search' className='footer-link-main' 
            onClick={() => handleImageClick('search')}>
            <img className='search-img' 
                src={selectedPage === 'search' ? searchSelected : search}
                alt="" />

        </Link>

        <Link to='/about' className='footer-link-main' 
            onClick={() => handleImageClick('about')}>
            <img className='about-img' 
                src={selectedPage === 'about' ? aboutSelected : about}
                alt="" />
        </Link>
    </div>
  );
}


export default Footer;