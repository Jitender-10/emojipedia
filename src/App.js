import React from "react";
import ReactDOM from "react-dom/client";
import './App.css';
import Card from "./card.jsx";
import emojiInfo from "./emojiData.jsx";

function CardMade(props){
  return(
    <Card 
      key={props.id}
      emoji={props.emoji}
      name= {props.name}
      meaning= {props.meaning}
    />


  );
}


function App() {
  
  return(
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojiInfo.map(CardMade)}</dl>
    </div>
    
  );


}
export default App;
