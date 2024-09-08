import React from 'react';
import './Homecards.css';

function Homecards(props) {
  const { name, icon } = props;

  return (
    <div className='card'>
      <img src={icon} alt={name} className='card-image' />
      <h2 className='card-title'>{name}</h2>
    </div>
  );
}

export default Homecards;

