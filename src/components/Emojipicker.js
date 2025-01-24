import React from 'react'
import { useState } from 'react'
const Emojipicker = () => {
const [ShowEmoji, setShowEmoji] = useState([]);
const [emojiList] = useState([
    "😀", "😁", "😂", "🤣", "😃", 
    "😄", "😅", "😆", "😉", "😊",
    "😍", "😘", "😗", "😙", "😚", 
    "😎", "🤓", "🧐", "😕", "😢", 
    "😭", "😡", "😠", "🤬", "😱", 
    "😴", "😪", "🤤", "😵", "🤯", 
    "🤔", "🤗", "🤨", "😶", "🙄", 
    "👍", "👎", "👌", "✌️", "🤟", 
    "👏", "🙌", "🙏", "💪", "🤝", 
    "❤️", "💔", "💖", "💞", "💕",
    "🎉", "🎊", "🎂", "🍰", "🎈", 
    "🏆", "⚽", "🏀", "🎾", "🏓", 
    "🚗", "✈️", "🚢", "🚀", "🏝️",
    "🌞", "🌈", "⭐", "🔥", "💡",
  ])

let addEmoji = (emj , index)=> {
    setShowEmoji((pre)=>pre + emj);
}
  return (
   <>
   <h1>Emoji Picker</h1>
   <div className="container">
     {
        emojiList.map((emj, index)=>
           <span className='span' key ={index}  onClick={()=>addEmoji(emj, index)}
           style={{fontSize: '20px', cursor: 'pointer',}}> {emj}</span>
        )
    } 
   </div>
   <div className="showEmoji">
    {ShowEmoji  && <span style={{fontSize: '20px', margin: '4px'}}>{ShowEmoji}</span>}
   </div>
   
   </>
  )
}

export default Emojipicker