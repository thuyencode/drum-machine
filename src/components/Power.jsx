import React, { useState, useEffect } from 'react';

const Power = () => {
  const [someKey, setSomeKey] = useState('someValue');

  useEffect(() => {
    setSomeKey('otherValue');
  }, []);

  return <p>{someKey}</p>;
};

export default Power;
