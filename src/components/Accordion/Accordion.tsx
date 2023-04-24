import React from "react";

type AccordionPropsType = {
  titleValue: string;
  collapsed: boolean;
  /**
   * 
   * @param element if Accordion colapsed or not
   * @returns void
   */
  setAccordionCollapsed: (el: boolean) => void;
};

function Accordion(props: AccordionPropsType) {
  if (props.collapsed === true) {
    return (
      <div>
        <AccordionTitle
          title={props.titleValue}
          setAccordionCollapsed={() => props.setAccordionCollapsed(!props.collapsed)}
        />
      </div>
    );
  } else {
    return (
      <div>
        <AccordionTitle
          title={props.titleValue}
          setAccordionCollapsed={() => props.setAccordionCollapsed(!props.collapsed)}
        />
        <AccordionBody />
      </div>
    );
  }
}

type AccordionTitlePropsType = {
  title: string;
  setAccordionCollapsed: () => void;
};

function AccordionTitle(props: AccordionTitlePropsType) {
  return <h3 onClick={props.setAccordionCollapsed}>{props.title}</h3>;
}

function AccordionBody() {
  return (
    <>
      <ul>
        <li>4</li>
        <li>5</li>
        <li>6</li>
      </ul>
    </>
  );
}

export default Accordion;
