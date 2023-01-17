import React, {useState} from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import {UncontrolledOnOff} from './components/UncontrolledOnOff/UncontrolledOnOff';

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [collapsed, setCollapsed] = useState(true);
    let [switchOn, setSwitchOn] = useState(false);

    return (
        <div className={'App'}>
            <Accordion
                titleValue={'Menu'}
                collapsed={collapsed}
                onChange={() => {
                    setCollapsed(!collapsed)
                }}/>

            <Accordion
                titleValue={'Users'}
                collapsed={collapsed}
                onChange={() => {
                    setCollapsed(!collapsed)
                }}/>

            <Rating value={ratingValue}
                    onClick={setRatingValue}/>
            <Rating value={ratingValue}
                    onClick={setRatingValue}/>
            <Rating value={ratingValue}
                    onClick={setRatingValue}/>
            <Rating value={ratingValue}
                    onClick={setRatingValue}/>
            <Rating value={ratingValue}
                    onClick={setRatingValue}/>

            <OnOff on={switchOn}
                   onChange={setSwitchOn}/>

            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}

            <UncontrolledAccordion titleValue={'MenuControlled'}/>

            <UncontrolledRating/>
        </div>
    );
}

/*type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {

    console.log('PageTitle rendering')
    return <h1>{props.title}</h1>
}*/

export default App;
