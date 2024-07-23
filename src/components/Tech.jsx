import React from 'react';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { BallCanvas } from './canvas';

// Agrupar tecnologías por categoría
const groupedTechnologies = technologies.reduce((acc, tech) => {
  if (!acc[tech.category]) {
    acc[tech.category] = [];
  }
  acc[tech.category].push(tech);
  return acc;
}, {});

const Tech = () => {
  return (
    <div className='flex flex-col gap-20'>
      {Object.keys(groupedTechnologies).map((category) => (
        <div key={category}>
          <h3 className='text-2xl font-bold text-center mb-10'>{category.toUpperCase()}</h3>
          <div className='flex flex-row flex-wrap justify-center gap-10'>
            {groupedTechnologies[category].map((technology, index) => (
              <div className='w-28 h-28 flex flex-col items-center' key={index}>
                {technology.name}
                <BallCanvas icon={technology.icon} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, '');
