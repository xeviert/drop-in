import React, { useContext, useState } from 'react';
import { AppContext } from '../AppContext';
import Collapsible from '../components/Collapsible';

/** @jsxImportSource theme-ui */

export default function Studios() {
  const appContext = useContext(AppContext);
  const { studios } = appContext;

  const allStudios = studios.map((s) => {
    return (
      <div className='p-3 col-md'>
        <div key={s.key}>{s.studio_name}</div>
        <div>
          {s.city},{' '}{s.state}
        </div>
        <a href={s.website}>{s.website}</a>
        <Collapsible>
        <div></div>
        <div></div>
        </Collapsible>
      </div>
    );
  });

  return (
    <div className='page-body'>
      {/* <Table columns={columns} data={data} /> */}
      <div
        sx={{
          display: 'grid',
          gridGap: 5,
          gridTemplateColumns: ['repeat(2, 1fr)', 'repeat(4, 1fr)'],
        }}
      >
        {allStudios}
      </div>
    </div>
  );
}
