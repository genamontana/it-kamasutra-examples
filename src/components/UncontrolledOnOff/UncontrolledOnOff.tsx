import React, {useState} from 'react';

type OnOffPropsType = {
    onChange: (on: boolean) => void
    defaultOn?: boolean
}

export const UncontrolledOnOff = (props: OnOffPropsType) => {

    let [on, setOn] = useState(props.defaultOn ? props.defaultOn : false)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        background: on ? 'green' : 'white',
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        background: !on ? 'red' : 'white',
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        background: on ? 'green' : 'red',
    }

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div>
            <div style={onStyle}
                 onClick={onClicked}>
                On
            </div>
            <div style={offStyle}
                 onClick={offClicked}>
                Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

