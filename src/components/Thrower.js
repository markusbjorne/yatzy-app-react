import React  from 'react';
import Button from './Button';

function Thrower({enabled, thrownCallback, throws, round}) {

    const callback = () => {
        thrownCallback();
    };

    let label = <>Runda {round}, kast {throws}</> ;

    if (round > 15) {
      label = <>Färdigt</>;
    }

    return (
      <div style={{padding: '10px 10px'}}>
        <Button label='Kasta' disabled={!enabled} callback={callback} />
        <div style={{padding: '5px'}}>
        {label}
        </div>
      </div>
    );
}

 export default Thrower;