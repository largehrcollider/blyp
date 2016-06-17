import React from 'react';
import InitialPrompt from '../containers/InitialPromptContainer.js'

export const CoreLayout = ({ children }) => (
  <div>
    <h1>Blyp</h1>
    <InitialPrompt />
  </div>
);

export default CoreLayout;
