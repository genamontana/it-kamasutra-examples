import {Clock} from './Clock';

export default {
    title: 'Clock',
    component: Clock
}

export const BaseAnalogExamples = ()=>{
    return <Clock mode={'analog'}/>
}

export const BaseDigitalExamples = ()=>{
    return <Clock mode={'digital'}/>
}