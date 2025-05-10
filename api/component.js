import React from 'react';
import { renderToString } from 'react-dom/server';

const DynamicComponent = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

export default (req, res) => {
  const { name = 'World' } = req.query;
  const componentHTML = renderToString(<DynamicComponent name={name} />);
  res.status(200).json({ component: componentHTML });
};