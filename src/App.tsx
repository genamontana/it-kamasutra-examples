import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    return (
        <div>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>Hello</p>
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"My Friends"}/>
            <Rating value={3}/>
            <Accordion titleValue={"Menu_1"} collapsed={true}/>
            <Accordion titleValue={"Menu_2"} collapsed={false}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
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
