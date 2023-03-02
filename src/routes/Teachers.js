import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import Collapsible from '../components/Collapsible';

import '../styling/Teachers.css';

/** @jsxImportSource theme-ui */

export default function Teachers() {
  const appContext = useContext(AppContext);
  const { teachers } = appContext;

  const allTeachers = teachers.map((t) => {
    return (
      <div className='teacher-item'>
      <div className='p-3 col-md' >
        <div key={t.id} className='full-name'>{t.full_name}</div>
        <div className='location'>
          {t.city},{' '}{t.state}
        </div>
        <div>
        <img src={t.photo_source} className='teachers-photos' />
        </div>
        <Collapsible>
        <a href={t.website}>{t.website}</a>
        <div>Certifications: {t.certifications}</div>
        <div>Yoga Types: {t.yoga_types}</div>
        </Collapsible>
      </div>
      </div>
    );
  });

  return (
    <div className='page-body'>
      <h1>Teachers</h1>
      <div className='page-content'>
      <div
        sx={{
          display: 'grid',
          gridGap: 4,
          gridTemplateColumns: ['repeat(2, 1fr)', 'repeat(4, 1fr)'],
        }}
        >
        {allTeachers}
      </div>
        </div>
    </div>
  );
}
