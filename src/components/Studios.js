import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import Table from '../components/Table';

export default function Studios() {
  const appContext = useContext(AppContext);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Studio Name',
        accessor: 'studio_name',
      },
      {
        Header: 'City',
        accessor: 'city',
      },
      {
        Header: 'State',
        accessor: 'state',
      },
      {
        Header: 'Website',
        accessor: 'website',
      },
    ],
    []
  );

  const { studios } = appContext;
  const data = React.useMemo(() => studios, []);

  return (
    <div className='page-body'>
      <Table columns={columns} data={data} />
    </div>
  );
}
