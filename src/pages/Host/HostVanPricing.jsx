// Imports
// React imports
import React from 'react';
import { useOutletContext } from 'react-router-dom';

function HostVanPricing() {
  const { currentVan } = useOutletContext();
  return (
    <h4 className="van-price text-left mb-3">
      <span className="font-bold">{currentVan.price}€</span>/day
    </h4>
  );
}

export default HostVanPricing;
