import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { cards } from "./cards";
import Card from "./Card";
import { data,fruit } from "./data";

function CardList() {
  // console.log(data);
  // console.log(fruit);
  // return <h1>Hello World</h1>; // jsx
  return (
    // <main className="card-list">
    //   <Card 
    //     image={cartOne.image}
    //     title={cartOne.title}
    //     descripiton={cartOne.descripiton}
    //   ><p>laorjoijoiajiwjfwi</p></Card>

    //   <Card 
    //     image={cartTwo.image}
    //     title={cartTwo.title}
    //     descripiton={cartTwo.descripiton}
    //   />
    //   <Card 
    //     image={cartThree.image}
    //     title={cartThree.title}
    //     descripiton={cartThree.descripiton}
    //   />
    //   <Card 
    //     image={cartFour.image}
    //     title={cartFour.title}
    //     descripiton={cartFour.descripiton}
    //   />
    // </main>

    <main className="card-list">
      {
        cards.map((card)=> {
          return <Card key={card.id} {...card} />;
        })
      }
      </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CardList/>);
// ReactDOM.render(<Greeting/>, document.getElementById("root"));