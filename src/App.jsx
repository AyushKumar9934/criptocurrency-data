
import { useEffect, useState } from 'react'
import Table1 from './component/Table1';



function App() {

const [dataSource,setDataSource]=useState([]);
useEffect(()=>{
  const fetchdata=async ()=>{
  const res=await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false");
  const data= await res.json();
  setDataSource(data)}
  fetchdata();

},[])
  return (
    <>
    <h1>Cryptocurrency Data</h1>
   <Table1 dataSource={dataSource} />
    </>
  )
}

export default App
