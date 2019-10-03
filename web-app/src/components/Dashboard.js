import React,  { useState } from 'react';

const Dashboard = () => {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);
  const[fouls, setFouls] = useState(0);
  
  function CountBalls() {
    if(balls === 4){
      return setBalls(0)
    }else{

      setBalls(balls + 1);
    }
  }
  function CountStrikes() {
    if(fouls === 0 && strikes === 0){
      return setStrikes(strikes + 2)
    }else if(fouls === 1 && strikes === 1) {

    return  setStrikes(strikes + 1);
    }else if(fouls === 3 && strikes === 2){
       return  setStrikes(0)
    }else{
       return setStrikes(0)
    }
  }
  // function CountFouls() {
  //   if(fouls === 1){
  //     return setStrikes(strikes + 2)
  //   }else{
  //     return setFouls(0)
  //   }
  // }

  return (
    <div className="dashboard"> 
      <div className="display">
          <h2>Strikes:{strikes}</h2>
      </div>
      <button onClick ={() => CountStrikes()}> Strike </button>

      <div className="display">
        <h2>Balls: {balls}</h2>
      </div>
        <button onClick ={() => CountBalls()}>Ball</button>

      <div className="display">
        <h2>{fouls}</h2>
      </div>
        <button onClick ={() => setFouls(strikes + 2)}>Foul</button>
    </div>
  )
}
export default Dashboard;