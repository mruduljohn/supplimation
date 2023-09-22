import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const PL = () => {
  const percentage = 30; //dummy should be changed
  const isPositive = percentage >= 0;

  const colorClass = isPositive ? 'text-green-500' : 'text-red-500';
  const displayText = isPositive ? `Profit ${percentage}%` : `Loss ${Math.abs(percentage)}%`;
  const textColorClass = isPositive ? 'text-green-500' : 'text-red-500';


  return (
    <div className='w-40 h-40'>
      <CircularProgressbar
        value={Math.abs(percentage)}
        text={displayText}
        strokeWidth={4}
        radius={10}
        styles={buildStyles({
          textSize: '10px', 
          textColor: isPositive ? '#00ff00' : '#ff0000',
          pathColor: isPositive ? '#00ff00' : '#ff0000', // Green for positive, red for negative
        })}
      />
      {/* <div className={`text-center mt-2 ${colorClass}`}>{percentage}</div> */}
    </div>
  );
};

export default PL;
