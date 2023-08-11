import React from "react"
import ReactDOM from "react-dom/client";
import style from "./index.css"


const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];

function App(){
    return(
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    ) 
}

function Header() {
    return (
        <header className="header">
            <h1>Fast React Pizza Co.</h1>
        </header>
    )
}
function Menu() {

    const pizzas = pizzaData;
    const numPizzas = pizzas.length;

    return (
        <main className="menu">
                
                <h2>Our Menu</h2>

                {numPizzas > 0 ? 
                <>
                <p>My name is Sajid and my learning react</p>
                <ul className="pizzas">
                {pizzas.map((pizza) => (
                    <Pizza pizzaObj={pizza}  key={pizza.name}/>
                ))}
                </ul> 
                </>
                : 
                <p>We're still working on our menu. Please come back later :)</p>}

                {/* {numPizzas  > 0 && <ul className="pizzas">
                {pizzas.map((pizza) => (
                    <Pizza pizzaObj={pizza}  key={pizza.name}/>
                ))}
                </ul>}
             */}
        </main>
    )
}
function Pizza({pizzaObj}){
    
    return (
        <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
            <img src={pizzaObj.photoName}/>
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                <span>{pizzaObj.soldOut ? 'SOLD OUT' :pizzaObj.price}</span>
            </div>
        </li>
    )
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 9;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    // if(hour >= openHour && hour <= closeHour ){
    //     alert("We're currently open!")
    // }else{
    //     alert("We're currently closed!")  
    // }
    return (
        <footer className="footer">
            {isOpen === true ?
                <Order 
                closeHour={closeHour}
                openHour={openHour}
                />
                : 
                <div className="order">
                    <p>We're currently close</p>
                </div> }
            {/* {isOpen && (
                <div className="order">
                    <p>We're currently open</p>
                    <button className="btn">Order</button>
                </div>
            )} */}
        </footer>
    )
    // return React.createElement('footer', null, 'Were currently open!')
}
function Order({closeHour,openHour}){
    return (
        <div className="order">
           <p>
            We're open from {openHour}:00 to {closeHour}:00. Come visit us or order online.
            </p> 
            <button className="btn">Order</button>
        </div>
    )
}






const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
<React.StrictMode>
    <App />
</React.StrictMode>
)