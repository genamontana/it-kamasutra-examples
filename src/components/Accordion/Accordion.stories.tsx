import React, {useState} from 'react';
import {Accordion, AccordionPropsType} from './Accordion';
import {action} from '@storybook/addon-actions';
import {Story} from '@storybook/react';

const GetCategoryObj = (categoryName: 'Color' | 'Event' | 'Main') => ({
    table: {
        category: categoryName
    }
})

export default {
    title: 'components/Accordion',
    component: Accordion,
    argTypes: {
        color: {
            control: 'color',
            ...GetCategoryObj('Color')
        },
        onChange: {...GetCategoryObj('Event')},
        onClick: {...GetCategoryObj('Event')},
        items: {...GetCategoryObj('Main')},
        collapsed: {...GetCategoryObj('Main')},
        titleValue: {...GetCategoryObj('Main')},
    }
};

const callback = action('accordion mode change event fired');

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>
const callbackProps = {
    onChange: callback,
}

export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
    ...callbackProps,
    titleValue: 'Menu',
    collapsed: true,
    items:[],
    onClick: (value:any) => {
        alert(`user with ID ${value} should be happy`)
    },
}

export const UsersUnCollapsedMode = Template.bind({})
UsersUnCollapsedMode.args = {
    ...callbackProps,
    titleValue: 'Users',
    collapsed: false,
    items: [
        {title: 'Gena', value: 1},
        {title: 'Valera', value: 2},
        {title: 'Artem', value: 33},
        {title: 'Viktor', value: 4},
    ],
    onClick: (value:any) => {
        alert(`user with ID ${value} should be happy`)
    },
}

export const ModeChanging: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(true);

    return <Accordion {...args}
                      collapsed={value}
                      onChange={() => setValue(!value)}/>
};
ModeChanging.args = {
    titleValue: 'Users',
    items: [
        {title: 'Gena', value: 1},
        {title: 'Valera', value: 2},
        {title: 'Artem', value: 33},
        {title: 'Viktor', value: 4},
    ],
    onClick: (value) => {
        alert(`user with ID ${value} should be happy`)
    },
}
