import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../AppContext';
import Collapsible from '../components/Collapsible';
// import Image from '../components/Image';
// import config from '../config';

/** @jsxImportSource theme-ui */

export default function Studios() {
  const appContext = useContext(AppContext);
  const { studios } = appContext;

  // const [studioPhotos, setStudioPhotos] = useState([]);

  // useEffect(() => {
  //   getAllStudioPhotos();
  // }, []);

  // const getAllStudioPhotos = () => {
  //   return fetch(
  //     `${config.PHOTO_API_ENDPOINT}/search/photos?query=yoga+studio&total_pages=5&client_id=${process.env.REACT_APP_CLIENT_ID}`
  //   )
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((photos) => {
  //       setStudioPhotos(photos.results);
  //     });
  // };

  const allStudios = studios.map((s) => {
    return (
      <div className='p-3 col-md'>
        <div key={s.key}>{s.studio_name}</div>
        <div>
          {s.city}, {s.state}
        </div>
        <a href={s.website}>{s.website}</a>
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
    <div className='page-body'>
      <h1>Studios</h1>
      <div
        sx={{
          display: 'grid',
          gridGap: 5,
          gridTemplateColumns: ['repeat(2, 1fr)', 'repeat(4, 1fr)'],
        }}
      >
        {allStudios}
        {/* {studioPhotos.map((image) => {
          return <Image key={image.index} {...image}/>
        })} */}
      </div>
    </div>
  );
}
