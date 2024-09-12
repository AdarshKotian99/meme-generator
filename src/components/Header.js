import React from "react"
import trollFaceImg from "../images/Troll Face.png"

export default function Header(){
    return(
        <div className="header--container">
            <img src={trollFaceImg} alt="troll face" className="header--image"/>
            <h1 className="header--title">Meme Generator</h1>
        </div>
    )
}