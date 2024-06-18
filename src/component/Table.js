import React from 'react'

import
{ Table }
from
"antd"
;

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Symbol',
      dataIndex: 'age',
      key: 'symbol',
    },
    {
      title: 'Image',
      dataIndex: 'address',
      key: 'image',
    },
    {
        title: 'Market_cap',
        dataIndex: 'address',
        key: 'market_cap',
      },
      {
        title: 'Market_cap',
        dataIndex: 'address',
        key: 'market_cap',
      },
  ];

const Table = ({dataSource}) => {
  return (
    <Table dataSource={dataSource} columns={columns} />
  )
}

export default Table