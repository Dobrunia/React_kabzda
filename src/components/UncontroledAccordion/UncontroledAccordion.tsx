import React, { useState } from "react";

type AccordionPropsType = {
  titleValue: string;
};

const btnStyle = {
  height: "20px",
};

function UncontroledAccordion(props: AccordionPropsType) {
  const [control, setControl] = useState<boolean>(true);
  if (control === false) {
    return (
      <div>
        <AccordionTitle
          title={props.titleValue}
          control={control}
          setControl={setControl}
        />
      </div>
    );
  } else {
    return (
      <div>
        <AccordionTitle
          title={props.titleValue}
          control={control}
          setControl={setControl}
        />
        <AccordionBody />
      </div>
    );
  }
}

type AccordionTitlePropsType = {
  title: string;
  control: boolean;
  setControl: (arg: boolean) => void;
};

function AccordionTitle(props: AccordionTitlePropsType) {
  return (
    <>
      <h3 onClick={() => props.setControl(!props.control)}>{props.title}</h3>
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
