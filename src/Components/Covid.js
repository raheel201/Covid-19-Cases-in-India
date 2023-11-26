import React from 'react'
import './covid.css'

export default function Covid(Props) {
  return (
    <div className="card">
      <div className="content">
        <div className="front">
          <h2>{Props['loc']}</h2>
        </div>
        <div className="back">
          <h6 className="card-text">Confirmed Indian Cases: <span style={{color:"orange"}}>{Props['confirmedCasesIndian']}</span></h6><hr/>
          <h6 className="card-text">Deaths: <span style={{color:"red"}}>{Props['deaths']}</span></h6><hr/>
          <h6 className="card-text">Discharged: <span style={{color:"lightgreen"}}>{Props['discharged']}</span></h6><hr/>
          <h6 className="card-text">Total Confirmed: <span style={{color:"darkred"}}>{Props['totalConfirmed']}</span></h6><hr/>
          <h6 className="card-text">Confirmed Foreign Cases: <span style={{color:"orange"}}>{Props['confirmedCasesForeign']}</span></h6>
        </div>
      </div>
    </div>
  )
}
