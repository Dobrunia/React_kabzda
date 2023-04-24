import React, { useState } from "react";
import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import { OnOff } from "./components/OnOff/OnOff";
import UncontroledAccordion from "./components/UncontroledAccordion/UncontroledAccordion";

type RatingType = 0 | 1 | 2 | 3 | 4 | 5;

function App() {
  const [value, setValue] = useState<RatingType>(0);
  const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);
  return (
    <div className={"App"}>
      <AddTitle />
      <Rating value={value} setValue={setValue} />
      <Accordion titleValue={"Menu"} collapsed={accordionCollapsed} setAccordionCollapsed={setAccordionCollapsed}/>
      <OnOff />
      <OnOff />
      <UncontroledAccordion titleValue={"Menu"} />
    </div>
  );
}

type RatingPropsType = {
  value: RatingType;
  setValue: (el: RatingType) => void;
};

function Rating(props: RatingPropsType) {
  return (
    <div>
      <Star
        selected={props.value > 0}
        value={1}
        setValue={() => props.setValue(1)}
      />
      <Star
        selected={props.value > 1}
        value={2}
        setValue={() => props.setValue(2)}
      />
      <Star
        selected={props.value > 2}
        value={3}
        setValue={() => props.setValue(3)}
      />
      <Star
        selected={props.value > 3}
        value={4}
        setValue={() => props.setValue(4)}
      />
      <Star
        selected={props.value > 4}
        value={5}
        setValue={() => props.setValue(5)}
      />
    </div>
  );
}

type StartPropsType = {
  selected: boolean;
  value: RatingType;
  setValue: () => void;
};

function Star(props: StartPropsType) {
  
  return (
    <span onClick={props.setValue}>
      {props.selected ? <b>star </b> : "star "}
    </span>
  );
}

function AddTitle() {
  return <>This is APP component</>;
}

export default App;
