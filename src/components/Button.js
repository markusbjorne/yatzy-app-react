import React  from 'react';

const style = { 
    borderRadius: '7px', 
    padding: '7px', 
    width: '70px' 
};

function Button({label, disabled, callback}) {
    return (
        <button disabled={disabled} onClick={callback} style={style}>{label}</button>
    );
}

 export default Button;