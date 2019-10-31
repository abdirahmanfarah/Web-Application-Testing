import React, { useState } from 'react';

const Dashboard = () => {
  const [ball, setBalls ] = useState(0);
  const [strikes, setStrikes] = useState(0);
  const [hit, setHit] = useState(0)
  const [foul, setFoul] = useState(0)


  function BallCount() {
    if(ball === 4 || hit === 1) {
      return setBalls(0)
    }else {
      setBalls(ball + 1)
    } 
  }

  function StrikeCount() {
    if(strikes === 3 || hit === 1) {
      return setStrikes(0)
    } else {
      setStrikes(strikes + 1)
    }
  }
  function hitCount() {
    if(hit === 1) {
      return setHit(0)
    } else {
      setHit(hit + 1)
    }
  }

  // function foulCount() {
  //   if(foul <= 1){
  //     return setFoul(strikes + 2)
  //   } else {
  //     return setFoul(ball + 1)
  //   }
  // }
  return (
    <div>
      <div>
        <h1>Balls: {ball}</h1>
        <button onClick={() => BallCount()}>Ball</button>
      </div>
  
      <div>
        <h1>Strikes: {strikes} </h1>
        <button onClick={() => StrikeCount()}>Strikes</button>
      </div>

      <div>
        <h1>Hit: {hit} </h1>
        <button onClick={() => hitCount()}>hit</button>
      </div>

      {/* <div>
        <h1>Foul: {foul} </h1>
        <button onClick={() => foulCount()}>foul</button>
      </div> */}

    </div>
  )
}

export default Dashboard;