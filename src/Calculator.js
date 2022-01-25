import React from 'react';
import { useState } from 'react';

function Calculator() {
    {/* set the state of the data that will be calculated */}
    const [ data, setData ] = useState('');
    {/* create an array of buttons from each number on calc, e object will determine which number is pressed and will add it to the calculation */}
    const calcBtns = [];
    [9,8,7,6,5,4,3,2,1,0, '.', '%'].forEach( item => {
        calcBtns.push(
            <button onClick={ e => {
                setData(data + e.target.value)
            }}
            value={ item }
            key= { item }>
              { item }      
            </button>
        )
    })

    return (
        <div className='wrapper'>
            
            <div className='show-input'>
                { data }
            </div>
            <div className='digits flex'>
                { calcBtns }
            </div>
            {/* clear button which erases on character at a time when pressed*/}
            <div className='modifiers subgrid'>
                <button onClick={ () => setData(data.substr(0, data.length - 1))}>
                    Clear
                </button>

            {/* AC button clears the entire field of characters*/}
                <button onClick={ () => setData('')}>
                    AC
                </button>
            </div>
            {/* each button for the operators */}
            <div className='operations subgrid'>
                <button onClick={ e => setData(data + e.target.value)} value='+'>
                    +
                </button>

                <button onClick={ e => setData(data + e.target.value)} value='-'>
                    -
                </button>

                <button onClick={ e => setData(data + e.target.value)} value='*'>
                    *
                </button>

                <button onClick={ e => setData(data + e.target.value)} value='/'>
                    /
                </button>
                {/* "=" btn */}
                <button onClick={ (e) => {
                    try {
                        setData(
                            String(eval(data)).length > 3 &&
                                String(eval(data)).includes('.')
                                    ? String(eval(data).toFixed(4))
                                    : String(eval(data))
                        );
                    } catch ( e ) {
                        console.log( e )
                    }    
                }} 
                value='='
                >
                    =
                </button>    
            </div>
        </div>
    )
}


export default Calculator;