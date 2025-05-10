import React from 'react';
import { renderToString } from 'react-dom/server';

const DynamicComponent = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

export default (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow only your frontend
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Allow specific HTTP methods
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allow specific headers

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end(); // Respond to preflight request
    return;
  }

  // Main logic for the function
  const { name = 'World' } = req.query;
  const componentHTML = renderToString(<DynamicComponent name={name} />);
  res.status(200).json({ component: componentHTML });
};