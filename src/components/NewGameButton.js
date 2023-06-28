import Button from './Button';
import React  from 'react';

function NewGameButton({newGame}) {

    return (
      <div style={{padding: '10px 10px'}}>
        <Button label={'Nytt spel'} enabled={true} callback={newGame} />
      </div>
    );
}

 export default NewGameButton;