import React from 'react';

const CategoryToggle = ({ category, toggleCategory }) => (
  <div onClick={toggleCategory}>
    {category}
  </div>
);

export default CategoryToggle;
