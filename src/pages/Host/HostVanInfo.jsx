// Imports
// React imports
import React from 'react';
import { useOutletContext } from 'react-router-dom';

function HostVanInfo() {
  const { currentVan } = useOutletContext();

  return (
    <section className="text-left">
      <h4>
        <span className="font-bold mr-1">Name:</span>
        {currentVan.name}
      </h4>
      <h4>
        <span className="font-bold mr-1">Category:</span>
        {currentVan.type}
      </h4>
      <h4>
        <span className="font-bold mr-1">Description:</span>
        {currentVan.description}
      </h4>
      <h4>
        <span className="font-bold mr-1">Visibility:</span>Published
      </h4>
    </section>
  );
}

export default HostVanInfo;
