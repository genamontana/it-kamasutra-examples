import React, {useState} from 'react';
import {Select, SelectPropsType} from './Select';
import {Story} from '@storybook/react';
import {action} from '@storybook/addon-actions';


export default {
    title: 'components/Select',
    component: Select,
}

//const Template: Story<SelectPropsType> = (args) => <Select {...args}/>

export const WithValue: Story<SelectPropsType> = (args) => {
    const [value, setValue] = useState('2');

    return <Select {...args}
                   value={value}
                   onChange={setValue}/>

};
WithValue.args = {
    items: [
        {value: '1', title: 'Minsk'},
        {value: '2', title: 'Moscow'},
        {value: '3', title: 'Kiev'},
    ],
}

export const WithoutValue: Story<SelectPropsType> = (args) => {
    const [value, setValue] = useState(null);

    return <Select {...args}
                   value={value}
                   onChange={setValue}/>
};
WithoutValue.args = {
    items: [
        {value: '1', title: 'Minsk'},
        {value: '2', title: 'Moscow'},
        {value: '3', title: 'Kiev'},
    ],
}