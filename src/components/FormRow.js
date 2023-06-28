
import React  from 'react';

import * as Storage from '../ScoreStorage';


function FormRow({label, canThrow, value, row, rowCallback}) {

    function click() {
        rowCallback(row);
        Storage.setValue(row, value);
    }

    function RowButton({label}) {
        return <button onClick={click} style={{width: '100%', height: '18px'}}>{label}</button>;
    }
    

    let score = '';
    if (value) {
        score = <RowButton label={value} />;
    } 

    else if (!canThrow()) {
        value = 0;
        score = <RowButton label='Stryk' />;

    }
    
    const stored = Storage.getValue(row);
    if (stored || stored === 0) {
        score = stored;
    }

    return (
        <div >
            <div style={{align: 'center', padding: '0px 5px', display: 'flex'}}>
                <div style={{width: '90px', height: '18px', padding: '1px 10px', border: '1px solid black'}}>
                {label}
                </div>
                <div style={{align: 'center', width: '50px', padding: '1px 10px', border: '1px solid black'}}>
                {score}
                </div>
            </div>
        </div>
    );
  }

  export default FormRow;