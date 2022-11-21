import React from 'react';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import peopleData from './data';

const Review = () => {
  const [index, setIndex] = useState(0);

  const { id, image, name, job, text } = peopleData[index];

  function checkNumber(num) {
    if (num > peopleData.length - 1) {
      return 0;
    }

    if (num < 0) {
      return peopleData.length - 1;
    }

    return num;
  }

  function showRandomInBetween(min = 0, max, randomNumber = Math.random()) {
    let random = Math.floor(randomNumber * max + min);
    if (index === random) {
      random = random + 1;
    }
    setIndex((prevIndex) => checkNumber(random));
  }

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>

      <span style={{ color: 'hsl(184, 51%, 40%)' }}>{id}</span>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>

      <div className='button-container'>
        <button
          className='prev-btn'
          onClick={() => setIndex((prevIndex) => checkNumber(prevIndex - 1))}
        >
          <FaChevronLeft />
        </button>
        <button
          className='next-btn'
          onClick={() => setIndex((prevIndex) => checkNumber(prevIndex + 1))}
        >
          <FaChevronRight />
        </button>
      </div>
      <button
        className='random-btn'
        onClick={() => showRandomInBetween(0, peopleData.length)}
      >
        surprise me
      </button>
    </article>
  );
};

export default Review;
