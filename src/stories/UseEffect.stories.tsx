import React, {useEffect, useState} from 'react';

export default {
    title: 'useEffect demo',
}


export const SimpleExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        console.log('useEffect');
        document.title = counter.toString()
        //api.getUsers().then('')
        //setInterval
        //indexedDB
        //document.getElementId
        // document.title = 'User';
    }, [counter])

    // Примеры для того что бы выучить, как работает useEffect
    // Нарисовали три useEffect и дали в конце разные зависимости
    // 1-ый случай без зависимостей - перересовывается всегда при перересовки компоненты
    // 2-ой случай с пустой зависимостью - отрисует только 1-ый рендер (аналог componentDidMount)
    // 3-й случай если в зависимость мы что-то передаём - 1-ый раз когда отрисовка идет и когда конкретный state меняется
    // ВАЖНО! Что useEffect срабатывает только после того, когда всё отрисуется!!!!

    //--------1-ый случай
    useEffect(() => {
        console.log('useEffect every render');
        document.title = counter.toString()
    })
    //--------2-ой случай
    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)');
        document.title = counter.toString()
    }, [])
    //--------3-й случай
    useEffect(() => {
        console.log('useEffect first render and every counter change');
        document.title = counter.toString()
    }, [counter])

    return <>
        Hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>fake +</button>
        <button onClick={() => setCounter(counter + 1)}>counter +</button>

    </>
}

export const SetTimeoutExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1);

    console.log('SetTimeoutExample')

    /*useEffect(() => {
        setTimeout(()=>{document.title = counter.toString()},1000)
    }, [counter])*/

    useEffect(() => {
        setInterval(() => {
            setCounter((state) => state + 1)
        }, 1000)
    }, [])


    return <>
        Hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>fake +</button>
        <button onClick={() => setCounter(counter + 1)}>counter +</button>
    </>
}

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1);

    console.log('Component rendered')

    useEffect(() => {
        console.log('Effect occurred' + counter)

        return () => console.log('RESET EFFECT')


    }, [counter])

    const onClickHandler = () => setCounter(counter + 1)


    return <>
        Hello, counter: {counter}
        <button onClick={onClickHandler}>+</button>
    </>
}


export const KeysTrackerExample = () => {
    const [text, setText] = useState('');

    console.log('Component rendered with ' + text)

    useEffect(() => {

        const handler = (e: KeyboardEvent) => {
            console.log(e.key);
            setText(text + e.key)
        }
        window.document.addEventListener('keypress', handler)
        return () => {
            window.removeEventListener('keypress', handler)
        }

    }, [text])


    return <>
        Typed text: {text}
    </>
}