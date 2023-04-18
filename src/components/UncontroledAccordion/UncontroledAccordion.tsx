import React, { useState } from "react";

type AccordionPropsType = {
  titleValue: string;
};

const btnStyle = {
  width: "50px",
  height: "20px",
};

function UncontroledAccordion(props: AccordionPropsType) {
  const [control, setControl] = useState<boolean>(true);
  if (control === false) {
    return (
      <div>
        <AccordionTitle title={props.titleValue} control={control} setControl={setControl} />
      </div>
    );
  } else {
    return (
      <div>
        <AccordionTitle title={props.titleValue} control={control} setControl={setControl} />
        <AccordionBody />
      </div>
    );
  }
}

type AccordionTitlePropsType = {
  title: string;
  control: boolean,
  setControl: (arg: boolean) => void;
};

function AccordionTitle(props: AccordionTitlePropsType) {
  return (
    <>
      <h3>{props.title}</h3>
      <button style={btnStyle} onClick={() => props.setControl(!props.control)}>
        show
      </button>
    </>
  );
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

export default UncontroledAccordion;
