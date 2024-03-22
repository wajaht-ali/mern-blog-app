/* eslint-disable no-unused-vars */
import React from 'react';

const DayAndDate = () => {
  const currentDate = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);

  return (
    <div>
      <h2 className='text-lg md:text-xl'>{formattedDate}</h2>
    </div>
  );
};

export default DayAndDate;
