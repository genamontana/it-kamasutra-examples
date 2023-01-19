import React from 'react';

type ItemsType = {
    title: string
    value: any
}
type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemsType[]
}

export const Select = (props: SelectPropsType) => {
    return (
        <div>
            <div>{}</div>
            {props.items.map((i,index)=><div key={index}>{i.title}</div>)}
        </div>
    );
};
