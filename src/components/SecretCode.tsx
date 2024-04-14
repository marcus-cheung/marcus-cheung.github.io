import React, { useState, useRef } from 'react';
import Mole from './Mole';

const map = 
    {
        'hi': <div className='fixed z-50 w-32 h-32 bg-red-500'>hi</div>,
        'okja': <img src='assets/images/okja.png' className='fixed top-0 left-0 z-50 w-32 h-32'></img>,
        // 'mole': <Mole></Mole>
    }

function SecretCode({closeModal}) {
    const [promo, setPromo] = useState('');

    return (
        <div>
            <div className='w-52 h-52 bg-orange-500 flex flex-col gap-8 justify-center items-center mb-20'>
                <form className='w-32 flex flex-col items-center' onSubmit={(event)=>{event.preventDefault(); setPromo(event.target[0].value)}}>
                    <input
                        type="text"
                        id="textInput"
                        name="textInput"
                        autoComplete='off'
                    />
                    <button type="submit">Submit</button>
                </form>
                <button className='border rounded-xl p-1' onClick={closeModal}>close</button>

            </div>
                
            {map[promo]}
        </div>
    )
}

export default SecretCode;