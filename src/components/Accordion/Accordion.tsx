import React from 'react';

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    /**
     * Elements that are showed when accordion is opened. Each item should be ItemType
     */
    //items: ItemType[] (Раскоментить когда доберусь до этого момента)
    /**
     * callback that is called when any item clicked
     * @param value is value of clicked item
     */
    //onClick: (value:any)=>void
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
        {!props.collapsed && <AccordionBody/>}
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

function AccordionBody() {
    /*console.log('AccordionBody rendering')*/
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

