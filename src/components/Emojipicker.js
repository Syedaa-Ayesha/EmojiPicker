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
           style={{fontSize: '22px', cursor: 'pointer', margin: '2px'}}> {emj}</span>
        )
    } 
   </div>
   <div className="showEmoji">
    {ShowEmoji  && <span>{ShowEmoji}</span>}
   </div>
   
   </>
  )
}

export default Emojipicker