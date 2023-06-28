import React  from 'react';

import FormRow from './FormRow';
import ResultRow from './ResultRow';
import * as Score from '../ScoreCounter';
import * as Result from '../ResultCounter';

function Form({canThrow, dices, selectedCallback}) {

    function rowCallback() {
        selectedCallback();
    }

    return (
        <div >
            <FormRow label='Ettor' canThrow={canThrow} value={Score.upperSum(dices, 1)} row='ones' rowCallback={rowCallback}/>
            <FormRow label='Tvåor' canThrow={canThrow} value={Score.upperSum(dices, 2)} row='twos' rowCallback={rowCallback}/>
            <FormRow label='Treor' canThrow={canThrow} value={Score.upperSum(dices, 3)} row='threes' rowCallback={rowCallback}/>
            <FormRow label='Fyror' canThrow={canThrow} value={Score.upperSum(dices, 4)} row='fours' rowCallback={rowCallback}/>
            <FormRow label='Femmor' canThrow={canThrow} value={Score.upperSum(dices, 5)} row='fives' rowCallback={rowCallback}/>
            <FormRow label='Sexor' canThrow={canThrow} value={Score.upperSum(dices, 6)} row='sixes' rowCallback={rowCallback}/>
            <ResultRow label='Bonus' value={Result.bonus()} />
            <FormRow label='Ett par' canThrow={canThrow} value={Score.numberOfKind(dices, 2)} row='pair' rowCallback={rowCallback}/>
            <FormRow label='Två par' canThrow={canThrow} value={Score.twoPairs(dices)} row='two-pairs' rowCallback={rowCallback}/>
            <FormRow label='Triss' canThrow={canThrow} value={Score.numberOfKind(dices, 3)} row='three-of-a-kind' rowCallback={rowCallback}/>
            <FormRow label='Fyrtal' canThrow={canThrow} value={Score.numberOfKind(dices, 4)} row='four-of-a-kind' rowCallback={rowCallback}/>
            <FormRow label='Liten stege' canThrow={canThrow} value={Score.smallStraight(dices)} row='small-straight' rowCallback={rowCallback}/>
            <FormRow label='Stor stege' canThrow={canThrow} value={Score.largeStraight(dices)} row='large-straight' rowCallback={rowCallback}/>
            <FormRow label='Kåk' canThrow={canThrow} value={Score.fullHouse(dices)} row='full-house' rowCallback={rowCallback}/>
            <FormRow label='Chans' canThrow={canThrow} value={Score.sum(dices)} row='chance' rowCallback={rowCallback}/>
            <FormRow label='Yatzy' canThrow={canThrow} value={Score.yatzy(dices)} row='yatzy' rowCallback={rowCallback}/>
            <ResultRow label='Summa' value={Result.totalSum()} />
        </div>
    );
}

export default Form;
