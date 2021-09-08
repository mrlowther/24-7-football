import React from "react";

import MainContainer from "./components/MainContainer";

const App = () => <MainContainer />;

export default App;

// import Nav from './components/Nav';
// import FlipCard from './components/FlipCard';
// 
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./components/styles.scss";
// 
// const cards = [
//   {
//     id: "2",
//     variant: "click",
//     front: "Click",
//   },
// ];
// 
// function App() {
//   return (
//     <div className="container">
//       <Nav />
// 
//       <div className="container">
//       <div className="row h-100">
//         <div class="col d-flex flex-column flex-md-row justify-content-around align-items-center">
//           {cards.map((card) => (
//             <FlipCard key={card.id} card={card} />
//           ))}
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// }