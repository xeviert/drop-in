import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import Collapsible from '../components/Collapsible';

/** @jsxImportSource theme-ui */

export default function Teachers() {
  const appContext = useContext(AppContext);
  const { teachers } = appContext;

  const allTeachers = teachers.map((t) => {
    return (
      <div className='p-3 col-md'>
        <div key={t.id}>{t.full_name}</div>
        <div>
          {t.city},{' '}{t.state}
        </div>
        <a href={t.website}>{t.website}</a>
        <Collapsible>
        <div>{t.certifications}</div>
        <div>{t.yoga_types}</div>
        </Collapsible>
      </div>

    );
  });

  return (
    <div className='page-body'>
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
  );
}
