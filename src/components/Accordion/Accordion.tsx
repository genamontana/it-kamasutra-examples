import React from 'react';

type ItemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    /**
     * Elements that are showed when accordion is opened. Each item should be ItemType
     */
    items: ItemType[]
    /**
     * callback that is called when any item clicked
     * @param value is value of clicked item
     */
    onClick: (value: any) => void
    /**
     * optional color oh header text
     */
    color?: string
}

export function Accordion(props: AccordionPropsType) {
    return <div>
        <AccordionTitle title={props.titleValue}
                        onChange={props.onChange}
                        color={props.color}
        />
        {!props.collapsed && <AccordionBody items={props.items}
                                            onClick={props.onClick}/>}
    </div>

}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
    color?: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    /*console.log('AccordionTitle rendering')*/
    return (
        <h3
            onClick={(e) => props.onChange()}
            style={{color: props.color ? props.color : 'black'}}
        >{props.title}
        </h3>
    );
}

export type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    /*console.log('AccordionBody rendering')*/
    return <ul>
        {props.items.map((i, index) =>
            <li onClick={() => props.onClick(i.value)}
                key={index}
            >
                {i.title}</li>)}
    </ul>
}

