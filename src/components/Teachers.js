import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import Table from '../components/Table';

export default function Teachers() {
  const appContext = useContext(AppContext);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'full_name',
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
      {
        Header: 'Certifications',
        accessor: 'certifications',
      },
      {
        Header: 'Types',
        accessor: 'yoga_types',
      },
    ],
    []
  );

  const { teachers } = appContext;
  const data = React.useMemo(() => teachers, []);

  return (
    <div className='page-body'>
      <Table columns={columns} data={data} />
    </div>
  );
}
