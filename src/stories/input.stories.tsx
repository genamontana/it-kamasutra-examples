import React, {ChangeEvent, useRef, useState} from 'react';
import {Story} from '@storybook/react';


export default {
    title: 'example/input',
    //component: Button,
}

const Template: Story<any> = (args) => <input {...args} />;

export const UncontrolledInput = Template.bind({});
UncontrolledInput.args = {};

export const TrackValueOfUncontrolledInput: Story<any> = (args) => {
    const [value, setValue] = useState('');
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const actualValue = e.currentTarget.value;
        setValue(actualValue)
    }

    return <> <input onChange={onChange}/> - {value} </>
};
TrackValueOfUncontrolledInput.args = {};

export const GetValueOfUncontrolledInputByButtonPress: Story<any> = (args) => {
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    }

    return <>
        <input ref={inputRef}/>
        <button onClick={save}>save
        </button>
        - actual value: {value}
    </>
};
GetValueOfUncontrolledInputByButtonPress.args = {};

export const ControlledInputWithFixedValue = Template.bind({});
ControlledInputWithFixedValue.args = {
    value: 'it-incubator.by'
};
