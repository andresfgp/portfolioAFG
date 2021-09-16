import React from 'react';
import '../assets/styles/components/Portfolio.css';
import PropTypes from 'prop-types';

const Portfolio = (props) => {
  const { title, company, dateStart, dateEnd, description, url, image } = props;

  return (
    <section className='portfolio'>
      <article className='project'>
        <div className='project-text'>
          <h3 className='project-title'>{title}</h3>
          <h5 className='project-company'>{company}</h5>
          <p className='project-date_start'>
            Start date:
            {' '}
            {dateStart}
          </p>
          <p className='project-date_end'>
            End date:
            {' '}
            {dateEnd}
          </p>
          <p className='project-description'>
            Description:
            {' '}
            {description}
          </p>
        </div>
        <figure className='project-imageContainer'>
          <a href={url}><img className='project-image' src={image} alt={title} /></a>
        </figure>
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
