import React from 'react';

function Accordion() {
    return (
    <div>
      <AccordionTitle/>
      <AccordionBody/>
    </div>
    );
  }
  
  function AccordionTitle() {
    return <h3>Menu</h3>
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