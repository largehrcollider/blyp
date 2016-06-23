import React from 'react'
import CategoryToggle from '../containers/CategoryToggle.js'

const FilterPane = ({ categories }) => (
  <div>
    {categories.map(category => (
      <CategoryToggle key={category} category={category} />
      ))}
  </div>
);

export default FilterPane
