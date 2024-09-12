import React from "react"

export default function Meme(){
    
    const [meme,setMeme] = React.useState({
        topText : "ONE DOES NOT SIMPLY",
        bottomText : "CLEAR THE CACHE",
        randomImage : "http://i.imgflip.com/1bij.jpg"
        
    })
    
    const [allMemesData, setallMemesData] = React.useState()
    
    React.useEffect( () => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => {  
            setallMemesData(data.data.memes)
        })
    },[])
    
    
    function getMemeImages(){
        const ramdomNumber = Math.floor(Math.random() * allMemesData.length)
        setMeme(prevMeme => {
            return{
                ...prevMeme,
                randomImage : allMemesData[ramdomNumber].url
            }
        })
    }
    
    function handleChange(event){
        const{name ,value} = event.target
        setMeme(prevMeme => {
            return{
                ...prevMeme,
                [name] : value
            }
        }
        
        )
    }
    
    return( 
        <main>  
        {/*<form className="form">*/}
        <div className="form--container">
        <input type="text" placeholder="Top text" name="topText" value={meme.topText} className="form--input1" onChange={handleChange}/>
        <input type="text" placeholder="Bottom text" name="bottomText" value={meme.bottomText} className="form--input2" onChange={handleChange}/>
        <button type="button" className="form--button" onClick={getMemeImages}>Get a new meme image  🖼</button>
        </div>
        {/*</form>*/}
        <div className="meme-container">
            <img src={meme.randomImage} alt="meme"/>
            <h2 className="meme-text top">{meme.topText}</h2>
            <h2 className="meme-text bottom">{meme.bottomText}</h2>
        </div>
        </main>
        )
        
    }