import React  from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix, faLock, faLockOpen, faSpinner}  from '@fortawesome/free-solid-svg-icons';

const style = {align: 'center', width: '30px', height: '30px'};

function Dice({index, value, locked, updateLock, loading}) {

    let icon;

    switch(value) {
        case 1: 
            icon = faDiceOne;
            break;
        case 2: 
            icon = faDiceTwo;
            break;
        case 3: 
            icon = faDiceThree; 
            break;
        case 4: 
            icon = faDiceFour; 
            break;
        case 5: 
            icon = faDiceFive; 
            break;
        case 6: 
            icon = faDiceSix; 
            break;
        default: 
            icon = null;
    }

    let symbol = <FontAwesomeIcon icon={icon} style={style} />;

    if(loading && !locked) {
        symbol = <FontAwesomeIcon icon={faSpinner} style={style} className='fa-spin' />;
    }

    const lockClick = () => {
        updateLock(index);
    };

    return (
      <div style={{width: '40px', padding: '5px 5px'}}>
          <div>
            {symbol}
          </div>
          <div>
            <button onClick={lockClick}>
                {locked ? <FontAwesomeIcon icon={faLock} />: <FontAwesomeIcon icon={faLockOpen} />}
            </button>
          </div>
      </div>
    );
  }

  export default Dice;