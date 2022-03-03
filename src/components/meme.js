import React from "react";
import memedata from "../memedata";



export default function Meme(){

    const[meme,setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://pics.me.me/indeed-meme-com-34423702.png"
    })

    const[allMemeImage,setAllMemeImage] =  React.useState(memedata)

    function getMemeImage(){
      const memeArray = allMemeImage.data.memems
      const randomNumber = Math.floor(Math.random() * memeArray.length)
      const url = memeArray[randomNumber].url
      setMeme(prevMeme => ({
          ...prevMeme,
          randomImage: url

      }))
    }
    function handleChange(event){
        const {name,value} = event.target
        setMeme(prevMeme =>({
            ...prevMeme,
            [name] : value


        }))
    }

    return(
        <main>
            <div className="form">
                <input 
                    type="text" 
                    placeholder="Top text" 
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange= {handleChange}
                />
                <input 
                    type="text" 
                    placeholder="Bottom text" 
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange= {handleChange}
                />
                <button className="form--button" onClick={getMemeImage}>Get a new meme image</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme-image"/> 
                <h2 className="meme-toptext">{meme.topText}</h2>
                <h2 className="meme-toptext">{meme.bottomText}</h2>
            </div>
          
        </main>
    )
}