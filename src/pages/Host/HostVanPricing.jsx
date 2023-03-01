// Imports
// React imports
import React from 'react';
import { useOutletContext } from 'react-router-dom';

function HostVanPricing() {
  const { currentVan } = useOutletContext();
  return (
    <h3>
      {currentVan.price}€<span>/day</span>
    </h3>
  );
}

export default HostVanPricing;
