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
      dataIndex: 'symbol',
      key: 'symbol',
    },
    {
      title: 'Image',
      dataIndex: 'image',
      render: image => <img height={"30px"} width={"30px"} src={image} />
    },
    {
        title: 'Market_cap',
        dataIndex: 'market_cap',
        key: 'market_cap',
      },
      {
        title: 'Market_Cap_Rank',
        dataIndex: 'market_cap_rank',
        key: 'market_cap_rank',
      },
      
  ];

const Table1 = ({dataSource}) => {
  return (
    <Table style={{margin:"10px"}} dataSource={dataSource} columns={columns} />
  )
}

export default Table1