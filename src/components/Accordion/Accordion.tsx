import React from 'react';

type AccordionPropsType = {
    titleValue: string,
    collapsed : boolean
}

function Accordion(props: AccordionPropsType) {
    if (props.collapsed === true) {
        return (
            <div>
                <AccordionTitle title={props.titleValue} />
            </div>
        );
    } else {
        return (
            <div>
                <AccordionTitle title={props.titleValue} />
                <AccordionBody />
            </div>
        );
    }
    
}

type AccordionTitlePropsType = {
    title: string;
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3>{props.title}</h3>
}

function AccordionBody() {
    return <>
        <ul>
            <li>4</li>
            <li>5</li>
            <li>6</li>
        </ul>
    </>
}

export default Accordion;