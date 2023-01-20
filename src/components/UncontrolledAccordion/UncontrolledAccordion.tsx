import React, {useReducer} from 'react';
import {reducer, TOGGLE_CONST} from './Reducer';


type AccordionPropsType = {
    titleValue: string
    //collapsed: boolean
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    //let [collapsed, setCollapsed] = useState(false)
    let [collapsed, dispatch] = useReducer(reducer, false)


    return <div>
        {/*<AccordionTitle
            title={props.titleValue}
            onClick={() => {
                setCollapsed(!collapsed)
            }}/>*/}
        <AccordionTitle
            title={props.titleValue}
            onClick={() => {
                dispatch({type: TOGGLE_CONST})
            }}/>
        {!collapsed && <AccordionBody/>}
    </div>

}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void

}

function AccordionTitle(props: AccordionTitlePropsType) {
    /*console.log('AccordionTitle rendering')*/
    return (
        <h3 onClick={() => {
            props.onClick()
        }}>{props.title} </h3>
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

