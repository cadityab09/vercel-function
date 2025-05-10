import React from 'react';
import { renderToString } from 'react-dom/server';

const DynamicComponent = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

export default (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const { name = 'World' } = req.query;
  res.status(200).json({ name });
};