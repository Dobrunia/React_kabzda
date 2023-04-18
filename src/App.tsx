import React from "react";
import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import { OnOff } from "./components/OnOff/OnOff";

function App() {
  return (
    <div>
      <AddTitle />
      <Rating value={3} />
      <Accordion titleValue={"Menu"} collapsed={false} />
      <OnOff />
      <OnOff />
      <OnOff />
    </div>
  );
}

type RatingPropsType = {
  value: 0 | 1 | 2 | 3 | 4 | 5;
};

function Rating(props: RatingPropsType) {
  return (
    <div>
      <Star selected={props.value > 0} />
      <Star selected={props.value > 1} />
      <Star selected={props.value > 2} />
      <Star selected={props.value > 3} />
      <Star selected={props.value > 4} />
    </div>
  );
}

type StartPropsType = {
  selected: boolean;
};

function Star(props: StartPropsType) {
  if (props.selected === true) {
    return (
      <span>
        <b>star </b>
      </span>
    );
  } else {
    return <span>star </span>;
  }
}

function AddTitle() {
  return <>This is APP component</>;
}

export default App;
