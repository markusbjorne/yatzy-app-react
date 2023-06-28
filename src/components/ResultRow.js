import React from 'react';

function ResultRow({label, value}) {
  return (
    <div>
      <div style={{align: 'center', padding: '0px 5px', display: 'flex'}}>
        <div
          style={{
            width: '90px',
            height: '18px',
            padding: '1px 10px',
            border: '1px solid black',
          }}
        >
          {label}
        </div>
        <div
          style={{
            align: 'center',
            padding: '1px 10px',
            width: '50px',
            border: '1px solid black',
          }}
        >
          {value}
        </div>
      </div>
    </div>
  );
}

export default ResultRow;
