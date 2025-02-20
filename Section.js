import React from "react";

const Section = ({ id, title, children }) => (
  <div className="container content" id={id}>
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  </div>
);

export default Section;
