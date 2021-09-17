import React from 'react';
import '../assets/styles/components/Portfolio.css';
import PropTypes from 'prop-types';

const Portfolio = (props) => {
  const { title, dateStart, dateEnd, description, image, imageCountry } = props;

  return (
    <section className='portfolio'>
      <article className='project'>
        <div className='project-text'>
          <h3 className='project-title'>{title}</h3>
          <p className='project-date_start'>
            <strong>
            Start date:
            </strong>
            {' '}
            {dateStart}
          </p>
          <p className='project-date_end'>
            <strong>
            End date:
            </strong>
            {' '}
            {dateEnd}
          </p>
          <p className='project-description'>
            <strong>
            Description:
            </strong>
            {' '}
            {description}
          </p>
        </div>
        <div className='project-image'>
          <img className='project-imageJob' src={image} alt={title} />
          <img className='project-imageCountry' src={imageCountry} alt='Flat' />
        </div>
      </article>
    </section>
  );
};

Portfolio.propTypes = {
  title: PropTypes.string,
  company: PropTypes.string,
  dateStart: PropTypes.string,
  dateEnd: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
};

export default Portfolio;
