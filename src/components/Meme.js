import React from "react";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setallMemes] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setallMemes(data.data.memes));
  }, []);

  function getallMemes() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <div className="main">
      {/* <p>{randomMemeurl}</p> */}
      <div className="form">
        <input
          className="inputs"
          type="text"
          placeholder="Top-Text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />

        <input
          className="inputs"
          type="text"
          placeholder="Bottom-Text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />

        <button onClick={getallMemes} className="btn">
          Get A New Meme Image 🖼
        </button>
      </div>
      <div className="meme">
        <img className="meme--img" alt="meme--img" src={meme.randomImage} />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </div>
  );
}
