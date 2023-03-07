import React, {useEffect, useMemo, useState} from 'react';

export default {
    title: 'useEffect demo',
}


export const SimpleExample = () => {
    const [counter, setCounter] = useState(1);

    useEffect(()=>{
        console.log('useEffect');
        //api.getUsers().then('')
        //setInterval
        //indexedDB
        //document.getElementId
        // document.title = 'User';
    })

    return <>
        Hello, {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>

    </>
}