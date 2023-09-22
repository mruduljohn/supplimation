import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const PL = () => {
  const percentage = 30; //dummy should be changed
  const [isPositive, setIsPositive] = React.useState(false)

  const colorClass = isPositive ? 'text-green-500' : 'text-red-500';
  const displayText = isPositive ? `Profit ${percentage}%` : `Loss ${Math.abs(percentage)}%`;
  const textColorClass = isPositive ? 'text-green-500' : 'text-red-500';


  return (
    <div className='w-40 h-40 md:col-span-1'>
      <CircularProgressbar
        value={Math.abs(percentage)}
        text={displayText}
        strokeWidth={4}
        radius={10}
        styles={buildStyles({
          textSize: '13px', 
          textColor: isPositive ? '#49db42' : '#f03030',
          pathColor: isPositive ? '#49db42' : '#f03030', // Green for positive, red for negative
        })}
      />
      {/* <div className={`text-center mt-2 ${colorClass}`}>{percentage}</div> */}
    </div>
  );
};

export default PL;
