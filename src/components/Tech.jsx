import React from 'react';
import { BallCanvas } from './canvas';
import SectionWrapper from '../hoc';
import { technologies, technologies2 } from '../constants/constants';

const Tech = () => {
  return (
    <div>
      {/* First Row of Technologies */}
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => {
          if (!technology || !technology.icon) {
            console.error('Invalid technology item:', technology);
            return null; // Skip rendering this item
          }
          return (
            <div className='flex-col' key={technology.name}>
              <div className='w-28 h-18'>
                <BallCanvas icon={technology.icon} />
              </div>
              <div className='text-center'>{technology.name}</div>
            </div>
          );
        })}
      </div>

      {/* Second Row of Technologies */}
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies2.map((technology) => {
          if (!technology || !technology.icon) {
            console.error('Invalid technology item:', technology);
            return null; // Skip rendering this item
          }
          return (
            <div className='flex-col' key={technology.name}>
              <div className='w-28 h-18'>
                <BallCanvas icon={technology.icon} />
              </div>
              <div className='text-center'>{technology.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, '');