
import { useEffect, useState } from 'react';
import './App.css';
import Covid from './Components/Covid.js';

function App() {
   
  const [covid, setCovid] = useState([])
  const [summary, setSummary] = useState([])
  const [search, setSearch] = useState([])

  const fetchData = () => {
    fetch("https://api.rootnet.in/covid19-in/stats/latest")
    .then(json=>{
      return json.json()
    }).then(data=>{
      console.log(data.data.regional)
      console.log(data.data.summary)
      setCovid(data.data.regional)
      setSummary(data.data.summary)
    })
  }
  
  useEffect(()=>{
    fetchData()
  },[])
  

  return (
    <div style={{backgroundColor:"rgb(7,7,7,0.95)",margin:"0"}}>
      <h1 className='text-center p-5' >COVID-19 CASES IN INDIA</h1>
      <div className='d-flex flex-wrap m-5 p-5 head' style={{justifyContent:"space-around"}}>
                <h2>Total Cases: {summary.total}</h2>
                <h2>Total Deaths: {summary.deaths}</h2>
                <h2>Total Discharged: {summary.discharged}</h2>
      </div>
      <input className='searchBar' type="text" placeholder='Enter State Name' onChange={(e)=>setSearch(e.target.value)}/>
      <div className='d-flex flex-wrap gap-5 justify-content-center'>
      
      {
        covid.filter((item)=>{
          if(search==""){
            return item
          }else if(item['loc'].toLowerCase().includes(search.toLowerCase())){
            return item
          }
        })
        .map((val)=>{
          return (
                <Covid
                      loc={val['loc']}
                      confirmedCasesForeign={val['confirmedCasesForeign']}
                      confirmedCasesIndian={val['confirmedCasesIndian']}
                      deaths={val['deaths']}
                      discharged={val['discharged']}
                      totalConfirmed={val['totalConfirmed']}
                />
          )    
          
        })
      }
      </div>
    </div>
  );
}

export default App;
