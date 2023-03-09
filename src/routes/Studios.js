import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../AppContext';
import Collapsible from '../components/Collapsible';

import '../styling/Studios.css';

/** @jsxImportSource theme-ui */

export default function Studios() {
  const appContext = useContext(AppContext);
  const { studios } = appContext;

  // useEffect(() => {
  //   getAllStudioPhotos();
  // }, []);

  const allStudios = studios.map((s) => {
    return (
      <div className="p-3 col-md studio-item">
        <div key={s.id} className='studio-name'>{s.studio_name}</div>
        <div className='location'>
          {s.city}, {s.state}
        </div>
        <a href={s.website}>{s.website}</a>
        <div>
        <img src={s.photo_source} className='studio-photos' />
        </div>

        <Collapsible>
          <h5>Rooms:</h5>
          {s.rooms.map((r) => {
            return (
              <>
                <div>
                  Heated:
                  {r.heated ? ' Yes' : ' No'}
                </div>
                <div>Capacity: {r.capacity}</div>
                <br />
              </>
            );
          })}
        </Collapsible>
      </div>
    );
  });

  return (
    <div className="page-body">
      <h1>Studios</h1>
      <div
        sx={{
          display: 'grid',
          gridGap: 5,
          gridTemplateColumns: ['repeat(2, 1fr)', 'repeat(3, 1fr)'],
        }}
      >
        {allStudios}

        {/* {studioPhotos.map((image) => {
          return (
              <img src={image.urls.small} loading='lazy' />
          );
        })} */}
      </div>
    </div>
  );
}
