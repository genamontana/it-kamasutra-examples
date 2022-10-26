import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    return (
        <div>
            <Accordion titleValue={"Menu"} collapsed={true}/>

            <Accordion titleValue={"Users"} collapsed={false}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {

    console.log('PageTitle rendering')
    return <h1>{props.title}</h1>
}

export default App;
