import React from 'react';
import formatDate from '../../utils/dateFormatter';

const Source = ({ name, date }) => {

  return(
    <div className='source'>
      <p className='source_name'>
        {name}
      </p>
      <p className='source_date'>
        {formatDate(date, 'preview')}
      </p>
    </div>
  );

};

export default Source;