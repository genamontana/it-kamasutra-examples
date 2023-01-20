import React from 'react';
import {Select, SelectPropsType} from './Select';
import {Story} from '@storybook/react';
import {action} from '@storybook/addon-actions';


export default {
    title: 'components/Select',
    component: Select,
}

//const Template: Story<SelectPropsType> = (args) => <Select {...args}/>

export const WithValue: Story<SelectPropsType> = (args) => {
    //const [value, setValue] = useState<boolean>(true);

    return <Select {...args}/>

};
WithValue.args = {
    value: '2',
    items: [
        {value: '1', title: 'Minsk'},
        {value: '2', title: 'Moscow'},
        {value: '3', title: 'Kiev'},
    ],
    onChange: () => {
        action('Value changed')
    },
}

export const WithoutValue: Story<SelectPropsType> = (args) => {
    //const [value, setValue] = useState<boolean>(true);

    return <Select {...args}/>
};
WithoutValue.args = {
    items: [
        {value: '1', title: 'Minsk'},
        {value: '2', title: 'Moscow'},
        {value: '3', title: 'Kiev'},
    ],
    onChange: () => {
        action('Value changed')
    },
}