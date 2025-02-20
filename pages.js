import React from "react";

export function Home() {
  return (
    <div className="content">
      <h2>Home</h2>
      <p>Welcome!</p>
      <p>
        <strong>Name:</strong> Precious Aubrey M. Costales
      </p>
      <p>
        <strong>Section:</strong> BSIT 32A1
      </p>
      <p>
        <strong>Academic Interests:</strong> Passionate about computing.
      </p>
    </div>
  );
}

export function About() {
  return (
    <div className="content">
      <h2>About Myself</h2>
      <p>
        <strong>Education:</strong> 3rd Year College | NCII Certified in CSS
      </p>
      <p>
        <strong>School Activities:</strong> Choir Member (currently inactive).
      </p>
      <p>
        <strong>Skills:</strong> Communication, Problem-Solving, Teamwork.
      </p>
    </div>
  );
}

export function Contact() {
  return (
    <div className="content">
      <h2>Contact Info</h2>
      <p>
        <strong>Name:</strong> Precious Aubrey M. Costales
      </p>
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:itsgucciprecious@gmail.com">
          itsgucciprecious@gmail.com
        </a>
      </p>
      <p>
        <strong>Subject:</strong> IT ELECTIVE 3
      </p>
      <p>
        <strong>Message:</strong> Have a wonderful day!
      </p>
    </div>
  );
}
