import React, {ChangeEvent, useRef, useState} from 'react';
import {Story} from '@storybook/react';
import {OnOffPropsType} from '../components/OnOff/OnOff';
import {action} from '@storybook/addon-actions';


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

export const ControlledInput: Story<any> = (args) => {
    const [parentValue, setParentValue] = useState('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <>
        <input value={parentValue}
               onChange={onChange}/>
    </>
};
ControlledInput.args = {};

export const ControlledCheckbox: Story<any> = (args) => {

    return <>
        <input type={'checkbox'}/>
    </>
};
ControlledCheckbox.args = {};

export const ControlledSelect: Story<any> = (args) => {

    return <>
        <input type={'checkbox'}/>
    </>
};
ControlledSelect.args = {};


export const ControlledInputWithFixedValue = Template.bind({});
ControlledInputWithFixedValue.args = {
    value: 'it-incubator.by'
};
