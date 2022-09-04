import React, {useEffect} from 'react';
import logo from './logo.svg';
import Header from './header';
import './main-page.css';

function App() {
  let houseCollection;
  useEffect(()=>{
    const fetchHouses = async () => {
      const rsp = await fetch("/houses.json");
      const houses = await rsp.json();
      return houses;
    };
    fetchHouses().then((data) =>{
      console.log('use effect data fetch', data);
    });
    console.log('use effect fired');
  },[]);
  return (
    <div className='Container'>
      <Header subtitle="House List - All" title="list of houses for sale"></Header>
    </div>
  );
}

export default App;
