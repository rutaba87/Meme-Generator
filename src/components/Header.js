import React from "react";
import TrollFace from "../Images/TrollFace.png";
export default function Header() {
  return (
    <header className="header">
      <img className="header-img" alt="troll-face" src={TrollFace} />
      <h1 className="header-title">Meme Generator</h1>
      <h4 className="header-project">React Course - Project 2</h4>
    </header>
  );
}
