import Dices from './components/Dices';
import Thrower from './components/Thrower';
import Form from './components/Form';
import NewGameButton from './components/NewGameButton';

import * as Result from './ResultCounter';
import * as Storage from './ScoreStorage';
import * as Score from './ScoreCounter';

import React, {useState , useEffect} from 'react';

function App() {
  
  const [round, setRound] = useState(Result.getRound() + 1);
  const [throws, setThrows] = useState(1);
  const [dice1, setDice1] = useState();
  const [dice2, setDice2] = useState();
  const [dice3, setDice3] = useState();
  const [dice4, setDice4] = useState();
  const [dice5, setDice5] = useState();
  const [lockedDice1, setLockedDice1] = useState(false);
  const [lockedDice2, setLockedDice2] = useState(false);
  const [lockedDice3, setLockedDice3] = useState(false);
  const [lockedDice4, setLockedDice4] = useState(false);
  const [lockedDice5, setLockedDice5] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => { loadingTimer(); }, []);

  const loadingTimer = () => {
    const timer = setTimeout(() => { 
    
      if (!lockedDice1) {
        setDice1(Score.randomDice());
      }
      if (!lockedDice2) { 
        setDice2(Score.randomDice());
      }
      if (!lockedDice3) {
        setDice3(Score.randomDice());
      }
      if (!lockedDice4) { 
        setDice4(Score.randomDice());
      }
      if (!lockedDice5) { 
        setDice5(Score.randomDice());
      }
      setLoading(false);
    
    
    }, 1 * 1000);
    return () => {
      clearTimeout(timer);
    };
  };

  function lockedCallback(lockedDices) {
    setLockedDice1(lockedDices[0]);
    setLockedDice2(lockedDices[1]);
    setLockedDice3(lockedDices[2]);
    setLockedDice4(lockedDices[3]);
    setLockedDice5(lockedDices[4]);
  }

  function thrownCallback() {
    setThrows(throws + 1);
    setLoading(true);
    loadingTimer();
  }

  function canThrow () {

    if (round > 15) {
      return false;
    }

    if (throws >= 3) { 
      return false;
    }

    return !(lockedDice1 && lockedDice2 && lockedDice3 && lockedDice4 && lockedDice5);
  }

  function resetLocks() {
    setLockedDice1(false);
    setLockedDice2(false);
    setLockedDice3(false);
    setLockedDice4(false);
    setLockedDice5(false);
  }

  function selectedCallback () {

    resetLocks();
    setThrows(1);
    setRound(round + 1);

    setLoading(true);
    loadingTimer();
  }

  async function newGame() {

    Storage.clear();

    resetLocks();

    setRound(1);
    setLoading(true);
    loadingTimer();
  }

  return (
    <div >
      <h1>YATZY</h1>
      <Dices dices={[dice1, dice2, dice3, dice4, dice5]} lockedDice1={lockedDice1} lockedDice2={lockedDice2} lockedDice3={lockedDice3} lockedDice4={lockedDice4} lockedDice5={lockedDice5} lockedCallback={lockedCallback} loading={loading}/>
      <Thrower enabled={canThrow()} thrownCallback={thrownCallback} throws={throws} round={round}/>     
      <Form canThrow={canThrow} dices={[dice1, dice2, dice3, dice4, dice5]} selectedCallback={selectedCallback} />
      <NewGameButton newGame={newGame} />
    </div>
  );
}


export default App;
