import React from 'react'
import ToggleCategory from '../containers/ToggleCategory.js'
import material from '../assets/materialize/css/materialize.css';

const FilterPane = ({ categories }) => (
  <div className={material.collection}>
    {categories.map(category => (
      <ToggleCategory key={category} category={category} />
      ))}
  </div>
);

export default FilterPane
