import React  from 'react';
import Dice from './Dice';

function Dices({dices, lockedDice1, lockedDice2, lockedDice3, lockedDice4, lockedDice5, lockedCallback, loading}) {

    const lockedDices = [lockedDice1, lockedDice2, lockedDice3, lockedDice4, lockedDice5];

    const updateLock = function (index) {     
        lockedDices[index] = !lockedDices[index];
        lockedCallback(lockedDices);
    };

    return (
      <div style={{align: 'center', display: 'flex'}}>
          <Dice index={0} value={dices[0]} locked={lockedDices[0]} updateLock={updateLock} loading={loading}/>
          <Dice index={1} value={dices[1]} locked={lockedDices[1]} updateLock={updateLock} loading={loading}/>
          <Dice index={2} value={dices[2]} locked={lockedDices[2]} updateLock={updateLock} loading={loading}/>
          <Dice index={3} value={dices[3]} locked={lockedDices[3]} updateLock={updateLock} loading={loading}/>
          <Dice index={4} value={dices[4]} locked={lockedDices[4]} updateLock={updateLock} loading={loading}/>
      </div>
    );
  }
  
  export default Dices;