import React from 'react'
// import All from '../containers/All.js';
import CategoryToggle from '../containers/CategoryToggle.js'

const FilterPane = ({ categories }) => (
  <div>
    <CategoryToggle key="allCategories" category={"All"}>
    {categories.map(category => (
      <CategoryToggle key="category" category="category"
      ))}
  </div>
);

export default FilterPane
